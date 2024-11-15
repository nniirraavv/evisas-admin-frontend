import { ISendToExchangeRequestBody } from '@/types';
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

/**
 * controllerBaseUrl
 * @returns `/v1/admin/applications`
 */
const controllerBaseUrl = '/v1/admin/applications';

/** POST /v1/applications */
export async function createVisaApplication(
  data: CreateApplicationBody,
  options?: { [key: string]: any },
) {
  return request<ICreateVisaApplicationResponse>(controllerBaseUrl, {
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
    controllerBaseUrl,
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
    `${controllerBaseUrl}/${applicationNo}`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** POST - /v1/admin/applications/:applicationNo/travellers/:applicantNo/visa-documents/upload-presign-url */
export async function getAdminTravellerPresignedUrl(
  applicationNo: string,
  applicantNo: string,
  params: PresignedUrlParams,
  options?: { [key: string]: any },
) {
  return request<PresignedUrlResponse>(
    `${controllerBaseUrl}/${applicationNo}/travellers/${applicantNo}/visa-documents/upload-presign-url`,
    {
      method: 'POST',
      data: { ...params },
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
    `${controllerBaseUrl}/file-documents/upload-presign-url`,
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
    `${controllerBaseUrl}/${applicationNo}/payments`,
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
  return request<PresignedUrlResponse>(
    `${controllerBaseUrl}/${applicationNo}`,
    {
      method: 'DELETE',
      ...(options || {}),
    },
  );
}
/** PATCH - /v1/applications/:applicationNo/submit */
export async function submitVisaApplication(
  applicationNo: string,
  options?: { [key: string]: any },
) {
  return request<IResponseStatus>(
    `${controllerBaseUrl}/${applicationNo}/submit`,
    {
      method: 'PATCH',
      ...(options || {}),
    },
  );
}

/** POST - /v1/admin/applications/:applicationNo/send-to-exchange */
/**
 * sendToExchange
 * @param applicationNo string
 * @param options object
 * @description Send the visa application to an exchange partner
 */
export async function sendToExchange(
  applicationNo: string,
  data: ISendToExchangeRequestBody,
  options?: { [key: string]: any },
) {
  return request<IResponseStatus>(
    `${controllerBaseUrl}/${applicationNo}/send-to-exchange`,
    {
      method: 'POST',
      data,
      ...(options || {}),
    },
  );
}
/** POST - /v1/admin/applications/:applicationNo/send-to-immigration */
/**
 * sendToImmigration
 * @param applicationNo string
 * @param options object
 * @description Send the visa application for immigration
 */
export async function sendToImmigration(
  applicationNo: string,
  data: Pick<ISendToExchangeRequestBody, 'remark'>,
  options?: { [key: string]: any },
) {
  return request<IResponseStatus>(
    `${controllerBaseUrl}/${applicationNo}/send-to-immigration`,
    {
      method: 'POST',
      data,
      ...(options || {}),
    },
  );
}
/** POST - /v1/admin/applications/:applicationNo/undo-send-to-immigration */
/**
 * undoSendToImmigration
 * @param applicationNo string
 * @param options object
 * @description Send the visa application for immigration
 */
export async function undoSendToImmigration(
  applicationNo: string,
  data: Pick<ISendToExchangeRequestBody, 'remark'>,
  options?: { [key: string]: any },
) {
  return request<IResponseStatus>(
    `${controllerBaseUrl}/${applicationNo}/undo-send-to-immigration`,
    {
      method: 'POST',
      data,
      ...(options || {}),
    },
  );
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
    `${controllerBaseUrl}/${applicationNo}/payments/order/cpay`,
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
    `${controllerBaseUrl}/${applicationNo}/payments/order/cpay/verify-booking`,
    {
      method: 'POST',
      data,
      ...(options || {}),
    },
  );
}
