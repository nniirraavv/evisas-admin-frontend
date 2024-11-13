import { request } from '@umijs/max';
import { UploadProgressEvent } from 'rc-upload/lib/interface';
import {
  FileUploadResponse,
  PassportOcrResponse,
  PresignedUrlParams,
  PresignedUrlResponse,
} from './typings';

/** POST - /v1/file-documents/upload-presign-url */
export async function getPresignedUrl(
  params: PresignedUrlParams,
  options?: { [key: string]: any },
) {
  return request<PresignedUrlResponse>(
    '/v1/file-documents/upload-presign-url',
    {
      method: 'POST',
      data: { ...params },
      ...(options || {}),
    },
  );
}
/** POST - dynamic URL */
export async function uploadWithPresignedUrl(
  url: string,
  data: FormData,
  onProgress?: (event: UploadProgressEvent) => void,
  options?: { [key: string]: any },
) {
  return request<FileUploadResponse>(url, {
    method: 'POST',
    baseURL: '',
    data,
    onUploadProgress: ({ total, loaded }) => {
      onProgress?.({ percent: Math.round((loaded / total) * 100) });
    },
    ...(options || {}),
  });
}
/** POST - /v1/helpers/passport-ocr */
export async function getPassportOcr(
  data: FormData,
  onProgress?: (event: UploadProgressEvent) => void,
  options?: { [key: string]: any },
) {
  return request<PassportOcrResponse>('/v1/helpers/passport-ocr', {
    method: 'POST',
    data,
    onUploadProgress: ({ total, loaded }) => {
      onProgress?.({ percent: Math.round((loaded / total) * 100) });
    },
    ...(options || {}),
  });
}
