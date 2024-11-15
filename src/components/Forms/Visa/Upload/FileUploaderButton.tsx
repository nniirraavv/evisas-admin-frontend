import { UPLOAD_STATUS } from '@/constants';
import { getFileObject } from '@/lib/uploadUtils';
import { uploadWithPresignedUrl } from '@/services/upload/UploadController';
import { getAdminTravellerPresignedUrl } from '@/services/visaApplication/VisaApplicationController';
import { ITravellerDocumentSchemaItem } from '@/types';
import { ProFormUploadDragger } from '@ant-design/pro-components';
import { RcFile } from 'antd/es/upload';
import { UploadFile } from 'antd/lib';
import { UploadChangeParam } from 'antd/lib/upload';
import { FC, useState } from 'react';

interface Props {
  document: Pick<
    ITravellerDocumentSchemaItem,
    'fieldName' | 'accept' | 'required'
  >;
  applicationNo: string;
  applicantNo: string;
}

const TravellerFileUploaderButton: FC<Props> = ({
  applicationNo,
  applicantNo,
  document,
}) => {
  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);

  const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    let newFileList = [...info.fileList];
    setFileList(newFileList);
  };

  return (
    <>
      <ProFormUploadDragger
        name={'visaDocuments'}
        title={'Click or drag files to this area to upload'}
        description={false}
        className="me-3 mt-4"
        formItemProps={{
          valuePropName: 'fileList',
          getValueFromEvent: (e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e.fileList;
          },
        }}
        fieldProps={{
          multiple: true,
          onChange: handleChange,
          fileList,
          accept: document?.accept,
          onRemove(file) {
            const newFiles = fileList?.filter(
              (_file) => _file?.uid !== file?.uid,
            );
            setFileList(newFiles);
          },
          itemRender: (originNode) => {
            return <div style={{ cursor: 'pointer' }}>{originNode}</div>;
          },
          customRequest: async ({ file, onSuccess, onProgress }) => {
            try {
              const signedUrlResponse = await getAdminTravellerPresignedUrl(
                applicationNo,
                applicantNo,
                {
                  fileName: (file as RcFile)?.name,
                  fileSize: (file as RcFile)?.size,
                  fileContentType: (file as RcFile)?.type,
                  fileType: 'visa-approval-document',
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
                onSuccess?.(successData);
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
                        (v: any) =>
                          v?.response?.result === UPLOAD_STATUS.failure,
                      ) > -1;
                    return hasFaultyUpload
                      ? Promise.reject('File were not uploaded correctly')
                      : Promise.resolve();
                  },
                },
              ]
            : []
        }
        normalize={(value) => {
          return value?.filter((f: any) => f?.status !== 'removed');
        }}
      />
    </>
  );
};

export default TravellerFileUploaderButton;
