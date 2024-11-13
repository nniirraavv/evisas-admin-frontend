import { request } from '@umijs/max';
import {
  ApplicantDocumentResponse,
  ApplicantPresignedUrlParams,
  IVisaApplicantResponse,
  PresignedUrlParams,
  PresignedUrlResponse,
  TravellerFormData,
  UpdateApplicantDocument,
} from './typings';

/** POST - /v1/applications/:applicationNo/applicants/:applicantNo/file-documents/upload-presign-url */
export async function getApplicantDocumentPresignedUrl(
  applicationNo: string,
  applicantNo: string,
  params: PresignedUrlParams,
  options?: { [key: string]: any },
) {
  return request<PresignedUrlResponse>(
    `/v1/applications/${applicationNo}/travellers/${applicantNo}/file-documents/upload-presign-url`,
    {
      method: 'POST',
      data: { ...params },
      ...(options || {}),
    },
  );
}
/** GET - /v1/applications/:applicationNo/travellers/:travellerNo */
export async function getVisaApplicant(
  applicationNo: string,
  applicantNo: string,
  options?: { [key: string]: any },
) {
  return request<IVisaApplicantResponse>(
    `/v1/applications/${applicationNo}/travellers/${applicantNo}`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
/** POST - /v1/applications/:applicationNo/travellers */
export async function createVisaApplicant(
  applicationNo: string,
  data: TravellerFormData,
  options?: { [key: string]: any },
) {
  return request<IVisaApplicantResponse>(
    `/v1/applications/${applicationNo}/travellers`,
    {
      method: 'POST',
      data,
      ...(options || {}),
    },
  );
}
/** PUT - /v1/applications/:applicationNo/travellers/:travellerNo */
export async function updateVisaApplicant(
  applicationNo: string,
  applicantNo: string,
  data: TravellerFormData,
  options?: { [key: string]: any },
) {
  return request<IVisaApplicantResponse>(
    `/v1/applications/${applicationNo}/travellers/${applicantNo}`,
    {
      method: 'PUT',
      data,
      ...(options || {}),
    },
  );
}
/** DELETE - /v1/applications/:applicationNo/travellers/:travellerNo */
export async function deleteVisaApplicant(
  applicationNo: string,
  applicantNo: string,
  options?: { [key: string]: any },
) {
  return request<IVisaApplicantResponse>(
    `/v1/applications/${applicationNo}/travellers/${applicantNo}`,
    {
      method: 'DELETE',
      ...(options || {}),
    },
  );
}
/** POST - /v1/applications/:applicationNo/travellers/:applicantNo/file-documents */
export async function createApplicantDocument(
  applicationNo: string,
  applicantNo: string,
  params: ApplicantPresignedUrlParams,
  options?: { [key: string]: any },
) {
  return request<ApplicantDocumentResponse>(
    `/v1/applications/${applicationNo}/travellers/${applicantNo}/file-documents`,
    {
      method: 'POST',
      data: { ...params },
      ...(options || {}),
    },
  );
}
/** DELETE - /v1/applications/:applicationNo/travellers/:applicantNo/file-documents/:fileId */
export async function deleteApplicantDocument(
  applicationNo: string,
  applicantNo: string,
  fileId: string,
  options?: { [key: string]: any },
) {
  return request<ApplicantDocumentResponse>(
    `/v1/applications/${applicationNo}/travellers/${applicantNo}/file-documents/${fileId}`,
    {
      method: 'DELETE',
      ...(options || {}),
    },
  );
}

/** PUT - /v1/applications/:applicationNo/travellers/:applicantNo/file-documents/:fileId */
export async function updateApplicantDocument(
  applicationNo: string,
  applicantNo: string,
  fileId: string,
  data: UpdateApplicantDocument,
  options?: { [key: string]: any },
) {
  return request<ApplicantDocumentResponse>(
    `/v1/applications/${applicationNo}/travellers/${applicantNo}/file-documents/${fileId}`,
    {
      method: 'PUT',
      data,
      ...(options || {}),
    },
  );
}
