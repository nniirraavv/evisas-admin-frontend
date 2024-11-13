import { UPLOAD_STATUS } from '@/constants';
import { getFileObject } from '@/lib/uploadUtils';
import { PassportOcrItem } from '@/services/upload/typings';
import {
  getPassportOcr,
  uploadWithPresignedUrl,
} from '@/services/upload/UploadController';
import { getTravellerPresignedUrl } from '@/services/visaApplication/VisaApplicationController';
import {
  ITravellerDocumentSchemaItem,
  TravellerDocumentFileTypes,
} from '@/types';
import { ProFormUploadDragger } from '@ant-design/pro-components';
import { RcFile } from 'antd/es/upload';
import { FC } from 'react';

interface Props {
  document: ITravellerDocumentSchemaItem;
  onNewOcrData: (file: PassportOcrItem) => void;
}

const FileUploader: FC<Props> = ({ document, onNewOcrData }) => {
  return (
    <ProFormUploadDragger
      name={document?.fieldName}
      title={'Click or drag files to this area to upload'}
      description={false}
      className="me-3 mt-4"
      formItemProps={{
        valuePropName: 'fileList',
        getValueFromEvent: (e) => {
          if (Array.isArray(e)) {
            return [e[e.length - 1]];
          }
          return [e?.file];
        },
      }}
      fieldProps={{
        height: 250,
        multiple: false,
        showUploadList: { showRemoveIcon: false },
        accept: document?.accept,
        itemRender: (originNode) => {
          return <div style={{ cursor: 'pointer' }}>{originNode}</div>;
        },
        customRequest: async ({ file, onSuccess, onProgress }) => {
          try {
            if (
              document?.type ===
                TravellerDocumentFileTypes.PASSPORT_FRONT_IMAGE ||
              document?.type === TravellerDocumentFileTypes.PASSPORT_BACK_IMAGE
            ) {
              // Upload file using the signed URL
              const ocrFormData = new FormData();
              ocrFormData.append('file', file);
              const ocrResponse = await getPassportOcr(ocrFormData, onProgress);
              // Notify parent of a new OCR Data
              onNewOcrData(ocrResponse.item.ocrdata);

              const successData = {
                result: UPLOAD_STATUS.success,
                file: {
                  ...getFileObject(file as RcFile),
                  uid: ocrResponse?.item?.fileDocument?.fileObjectKey,
                },
              };

              onSuccess?.(successData);
            } else {
              const signedUrlResponse = await getTravellerPresignedUrl({
                fileName: (file as RcFile)?.name,
                fileSize: (file as RcFile)?.size,
                fileContentType: (file as RcFile)?.type,
                fileType: document?.type,
              });
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
                onSuccess?.(successData);
              }
            }
          } catch (error) {
            onSuccess?.({
              result: UPLOAD_STATUS.failure,
              ...getFileObject(file as RcFile),
            });
            console.log('error on upload ', error);
          }
        },
      }}
      rules={
        document?.required
          ? [
              {
                required: true,
                message: 'This document is required',
              },
              {
                message: 'File were not uploaded correctly',
                validator: (_, value) => {
                  if (!value || value?.length === 0) return Promise.resolve();
                  const hasFaultyUpload =
                    value.findIndex(
                      (v: any) => v?.response?.result === UPLOAD_STATUS.failure,
                    ) > -1;
                  return hasFaultyUpload
                    ? Promise.reject('File were not uploaded correctly')
                    : Promise.resolve();
                },
              },
            ]
          : []
      }
    />
  );
};

export default FileUploader;
