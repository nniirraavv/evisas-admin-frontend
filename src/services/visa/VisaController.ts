import { request } from '@umijs/max';
import {
  IResponse,
  IVisaInfoResponse,
  VisaInformation,
  VisaSearchParams,
} from './typings';

/** GET /v1/search/visas */
export async function queryVisasList(
  params: VisaSearchParams,
  options?: { [key: string]: any },
) {
  return request<IResponse>('/v1/search/visas', {
    method: 'POST',
    data: { ...params },
    ...(options || {}),
  });
}
/** GET /v1/visa-informations/:visaId?visaInfoProvider=ON_ARRIVAL */
export async function getVisaInfo(
  visaId: string,
  options?: { [key: string]: any },
) {
  return request<IVisaInfoResponse>(
    `/v1/visa-informations/${visaId}?visaInfoProvider=ON_ARRIVAL`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
/** POST /v1/visa-informations?force=yes */
export async function saveVisaInfo(
  data: VisaInformation,
  options?: { [key: string]: any },
) {
  return request<IVisaInfoResponse>('/v1/visa-informations?force=yes', {
    method: 'POST',
    data,
    ...(options || {}),
  });
}
