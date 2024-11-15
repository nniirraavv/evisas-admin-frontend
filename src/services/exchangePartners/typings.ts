import { ResponseStatus } from '@/constants';
interface ExchangePartnerOption {
  title: string;
  id: string;
}
export interface IResponseStatus {
  status: ResponseStatus;
}
export interface IResponsePage<T> {
  index: number;
  size: number;
  items: T[];
}
export interface IResponse extends IResponseStatus {
  page: IResponsePage<ExchangePartnerOption>;
  total: number;
}
