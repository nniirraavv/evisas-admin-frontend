import { IRemarkRequestBody } from '@/types';
import { request } from '@umijs/max';
import {
  ApplicantDocumentResponse,
  ApplicantPresignedUrlParams,
  IApproveVisaForTravellerRequestBody,
  IVisaApplicantResponse,
  PresignedUrlParams,
  PresignedUrlResponse,
  TravellerFormData,
  UpdateApplicantDocument,
} from './typings';

const controllerBaseUrl = '/v1/admin/applications';

/** POST - /v1/applications/:applicationNo/applicants/:applicantNo/file-documents/upload-presign-url */
export async function getApplicantDocumentPresignedUrl(
  applicationNo: string,
  applicantNo: string,
  params: PresignedUrlParams,
  options?: { [key: string]: any },
) {
  return request<PresignedUrlResponse>(
    `${controllerBaseUrl}/${applicationNo}/travellers/${applicantNo}/file-documents/upload-presign-url`,
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
    `${controllerBaseUrl}/${applicationNo}/travellers/${applicantNo}`,
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
    `${controllerBaseUrl}/${applicationNo}/travellers`,
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
    `${controllerBaseUrl}/${applicationNo}/travellers/${applicantNo}`,
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
    `${controllerBaseUrl}/${applicationNo}/travellers/${applicantNo}`,
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
    `${controllerBaseUrl}/${applicationNo}/travellers/${applicantNo}/file-documents`,
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
    `${controllerBaseUrl}/${applicationNo}/travellers/${applicantNo}/file-documents/${fileId}`,
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
    `${controllerBaseUrl}/${applicationNo}/travellers/${applicantNo}/file-documents/${fileId}`,
    {
      method: 'PUT',
      data,
      ...(options || {}),
    },
  );
}
/** POST - /v1/applications/:applicationNo/travellers/:applicantNo/action-required */
export async function markAsActionRequiredForApplicant(
  applicationNo: string,
  applicantNo: string,
  data: IRemarkRequestBody,
  options?: { [key: string]: any },
) {
  // TODO: update response data type
  return request<ApplicantDocumentResponse>(
    `${controllerBaseUrl}/${applicationNo}/travellers/${applicantNo}/action-required`,
    {
      method: 'POST',
      data,
      ...(options || {}),
    },
  );
}
/** POST - /v1/applications/:applicationNo/travellers/:applicantNo/verify */
export async function verifyApplicant(
  applicationNo: string,
  applicantNo: string,
  data: IRemarkRequestBody,
  options?: { [key: string]: any },
) {
  // TODO: update response data type
  return request<ApplicantDocumentResponse>(
    `${controllerBaseUrl}/${applicationNo}/travellers/${applicantNo}/verify`,
    {
      method: 'POST',
      data,
      ...(options || {}),
    },
  );
}
/** POST - /v1/applications/:applicationNo/travellers/:applicantNo/visa-reject */
export async function rejectVisaForApplicant(
  applicationNo: string,
  applicantNo: string,
  data: IRemarkRequestBody,
  options?: { [key: string]: any },
) {
  // TODO: update response data type
  return request<ApplicantDocumentResponse>(
    `${controllerBaseUrl}/${applicationNo}/travellers/${applicantNo}/visa-reject`,
    {
      method: 'POST',
      data,
      ...(options || {}),
    },
  );
}
/** POST - /v1/applications/:applicationNo/travellers/:applicantNo/visa-approve */
export async function approveVisaForApplicant(
  applicationNo: string,
  applicantNo: string,
  data: IApproveVisaForTravellerRequestBody,
  options?: { [key: string]: any },
) {
  // TODO: update response data type
  return request<ApplicantDocumentResponse>(
    `${controllerBaseUrl}/${applicationNo}/travellers/${applicantNo}/visa-approve`,
    {
      method: 'POST',
      data,
      ...(options || {}),
    },
  );
}
