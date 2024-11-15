import { request } from '@umijs/max';
import { IResponse } from './typings';

/**
 * controllerBaseUrl
 * @returns `/v1/admin/exchange-partners`
 */
const controllerBaseUrl = '/v1/admin/exchange-partners';

/** GET */
export async function getExchangePartners(options?: { [key: string]: any }) {
  return request<IResponse>(`${controllerBaseUrl}`, {
    method: 'GET',
    ...(options || {}),
  });
}
