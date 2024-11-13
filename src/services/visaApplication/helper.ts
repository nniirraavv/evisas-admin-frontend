import { UPLOAD_STATUS } from '@/constants';
import { getFileObject } from '@/lib/uploadUtils';
import { message } from 'antd';
import { RcFile, UploadProgressEvent } from 'rc-upload/lib/interface';
import { uploadWithPresignedUrl } from '../upload/UploadController';
import {
  createApplicantDocument,
  getApplicantDocumentPresignedUrl,
} from './VisaApplicantController';

export async function uploadApplicantDocument(
  applicationNo: string,
  applicantNo: string,
  file: string | RcFile | Blob,
  documentType: string,
  onProgress: ((event: UploadProgressEvent) => void) | undefined,
  onSuccess: ((body: any, xhr?: XMLHttpRequest) => void) | undefined,
) {
  try {
    const signedUrlResponse = await getApplicantDocumentPresignedUrl(
      applicationNo,
      applicantNo,
      {
        fileName: (file as RcFile)?.name,
        fileSize: (file as RcFile)?.size,
        fileContentType: (file as RcFile)?.type,
        fileType: documentType,
      },
    );
    // Fetch the presigned URL from the server
    if (signedUrlResponse) {
      // Upload file using the signed URL
      const formData = new FormData();
      const fields = signedUrlResponse?.item?.fields;
      for (const key in fields) {
        if (fields.hasOwnProperty.call(fields, key)) {
          // @ts-ignore
          const value = fields[key];
          formData.append(key, value);
        }
      }
      formData.append('file', file as RcFile);
      await uploadWithPresignedUrl(
        signedUrlResponse?.item?.url,
        formData,
        onProgress,
      );
      const successData = {
        result: UPLOAD_STATUS.success,
        file: {
          ...getFileObject(file as RcFile),
          uid: signedUrlResponse?.item?.fileDocument?.fileObjectKey,
        },
      };

      const response = await createApplicantDocument(
        applicationNo,
        applicantNo,
        {
          fileName: signedUrlResponse?.item?.fileDocument?.fileName,
          fileType: documentType,
          fileObjectKey: signedUrlResponse?.item?.fileDocument?.fileObjectKey,
        },
      );

      message.success(`${(file as RcFile)?.name} file uploaded successfully`);
      onSuccess?.(successData);
      return response?.item;
    }
  } catch (error) {
    console.log('error on upload ', error);
    message.error(`${(file as RcFile)?.name} file upload failed.`);
    onSuccess?.({
      result: UPLOAD_STATUS.failure,
      ...getFileObject(file as RcFile),
    });
    throw error;
  }
}
