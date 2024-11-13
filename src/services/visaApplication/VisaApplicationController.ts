import { request } from '@umijs/max';
import {
  CreateApplicationBody,
  CreateCpayOrderResponse,
  ICreateVisaApplicationResponse,
  IPaginationParams,
  IResponseStatus,
  IVisaApplicationsPaymentsResponse,
  IVisaApplicationsResponse,
  PresignedUrlParams,
  PresignedUrlResponse,
  VisaApplication,
} from './typings';

/** POST /v1/applications */
export async function createVisaApplication(
  data: CreateApplicationBody,
  options?: { [key: string]: any },
) {
  return request<ICreateVisaApplicationResponse>('/v1/applications', {
    method: 'POST',
    data,
    ...(options || {}),
  });
}
/** GET /v1/applications */
export async function getVisaApplications(
  pageParams: IPaginationParams,
  options?: { [key: string]: any },
) {
  return request<IVisaApplicationsResponse<VisaApplication>>(
    '/v1/applications',
    {
      method: 'GET',
      params: { ...pageParams },
      ...(options || {}),
    },
  );
}
/** GET /v1/applications/:applicationNo */
export async function getVisaApplication(
  applicationNo: string,
  options?: { [key: string]: any },
) {
  return request<ICreateVisaApplicationResponse>(
    `/v1/applications/${applicationNo}`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
/** POST - /v1/applications/file-documents/upload-presign-url */
export async function getTravellerPresignedUrl(
  params: PresignedUrlParams,
  options?: { [key: string]: any },
) {
  return request<PresignedUrlResponse>(
    '/v1/applications/file-documents/upload-presign-url',
    {
      method: 'POST',
      data: { ...params },
      ...(options || {}),
    },
  );
}
/** GET /v1/applications/:applicationNo/payments */
export async function getVisaApplicationPayments(
  applicationNo: string,
  options?: { [key: string]: any },
) {
  return request<IVisaApplicationsPaymentsResponse>(
    `/v1/applications/${applicationNo}/payments`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
/** DELETE - /v1/applications/:applicationNo */
export async function deleteVisaApplication(
  applicationNo: string,
  options?: { [key: string]: any },
) {
  return request<PresignedUrlResponse>(`/v1/applications/${applicationNo}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}
/** PATCH - /v1/applications/:applicationNo/submit */
export async function submitVisaApplication(
  applicationNo: string,
  options?: { [key: string]: any },
) {
  return request<IResponseStatus>(`/v1/applications/${applicationNo}/submit`, {
    method: 'PATCH',
    ...(options || {}),
  });
}

////////////////////////////////////
// ********** PAYMENTS ********** //
////////////////////////////////////

/** GET - /v1/applications/:applicationNo/payments/order/cpay */
export async function createOrderCpay(
  applicationNo: string,
  options?: { [key: string]: any },
) {
  return request<CreateCpayOrderResponse>(
    `/v1/applications/${applicationNo}/payments/order/cpay`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
/** POST - /v1/applications/:applicationNo/payments/order/cpay/verify-booking */
export async function verifyBookingCpay(
  applicationNo: string,
  data: {
    merchantOrderNo: string;
    bookingReference: string;
  },
  options?: { [key: string]: any },
) {
  return request<CreateCpayOrderResponse>(
    `/v1/applications/${applicationNo}/payments/order/cpay/verify-booking`,
    {
      method: 'POST',
      data,
      ...(options || {}),
    },
  );
}
