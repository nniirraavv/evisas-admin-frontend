import { ResponseStatus } from '@/constants';
import { PartialAntFile } from '@/types';
import { VisaInformation, VisaSearchInfo } from '../visa/typings';
export interface IResponseStatus {
  status: ResponseStatus;
}
export interface PresignedUrlParams {
  /**
   * @description Name of file
   */
  fileName: string;
  /**
   * @description Size of file in bytes
   */
  fileSize: number;
  /**
   * @description Category of the selected file, for ex. `Letter`
   */
  fileType: string;
  /**
   * @description Mime type of the file
   */
  fileContentType: string;
}
export interface ApplicantPresignedUrlParams {
  fileName: string;
  fileType: string;
  fileObjectKey: string;
}

export interface Fields {
  key: string;
  'Content-Type': string;
  bucket: string;
  'X-Amz-Algorithm': string;
  'X-Amz-Credential': string;
  'X-Amz-Date': string;
  'X-Amz-Security-Token': string;
  Policy: string;
  'X-Amz-Signature': string;
}

export interface ApplicantDocument {
  fileId: string;
  fileType: string;
  fileName: string;
  fileObjectKey: string;
  isInitial: boolean;
  isApproved: boolean;
  fileS3Key: string;
}
export interface ApplicantDocumentResponse extends IResponseStatus {
  item: ApplicantDocument;
}

export interface PresignedUrlResponse extends IResponseStatus {
  item: {
    fields: Fields;
    url: string;
    fileDocument: {
      fileObjectKey: string;
      fileType: number;
      fileName: string;
    };
  };
}

export interface CreateApplicationBody
  extends Omit<VisaSearchInfo, 'visaInfo'> {
  visaInfo: VisaInformation;
  travelDate: string;
  returnDate: string;
  travellers: ITravellerRequestObject[];
}

export interface UpdateApplicantDocument {
  isApproved?: boolean;
  documentType?: string;
}

export interface ITravellerRequestObject {
  title: string;
  surName: string;
  givenName: string;
  gender: string;
  dateOfBirth: string;
  placeOfBirth: string;
  nationality: string;
  fatherName: string;
  motherName: string;
  maritalStatus: string;
  spouseName: string;
  oldPassportNumber: string;
  emigrationCheckRequired: boolean;
  passportNumber: string;
  issuedDate: string;
  dateOfExpiry: string;
  occupation: string;
  mobileNo: string;
  email: string;
  passportFrontPage: IPassportFrontPage;
  passportBackPage: IPassportBackPage;
  photo: IPhoto;
}

export interface IPassportFrontPage {
  fileName: string;
  fileObjectKey: string;
}

export interface IPassportBackPage {
  fileName: string;
  fileObjectKey: string;
}

export interface IPhoto {
  fileName: string;
  fileObjectKey: string;
}

export interface ICreateVisaApplicationResponse extends IResponseStatus {
  item: VisaApplication;
}
export interface IVisaApplicantResponse extends IResponseStatus {
  item: Traveller;
}
export interface IResponsePage<T> {
  index: number;
  size: number;
  items: T[];
}
export interface IVisaApplicationsResponse<T> extends IResponseStatus {
  total: number;
  page: IResponsePage<T>;
}
export interface IVisaApplicationsPaymentsResponse extends IResponseStatus {
  item: VisaApplicationPayments;
}

export interface VisaApplicationPayments {
  application: VisaApplication;
  calculateFee: VisaApplicationFee;
}

export interface VisaApplicationFee {
  applicationNo: string;
  currency: string;
  totalAmount: number;
  travellers: VisaApplicationFeeTraveller[];
}

export interface VisaApplicationFeeTraveller {
  travellerNo: string;
  amount: number;
  currency: string;
  age: number;
}

export interface VisaApplication {
  consulate: string;
  applicationNo: string;
  sourceCountry: string;
  destinationCountry: string;
  sourceCountryObj: SourceCountryObj;
  destinationCountryObj: DestinationCountryObj;
  travelDate: string;
  returnDate: string;
  currentStatus: string;
  travellers: Traveller[];
  visaInformation: VisaInformation;
  createdAt: string;
  updatedAt: string;
  statusHistory: StatusHistory[];
  paymentId?: string;
}
export interface IPaginationParams {
  page?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: string;
  search?: string;
  status?: string;
}
export interface NationalityObj {
  country: string;
  countryCode: string;
  status: boolean;
}
export interface StatusHistoryUser {
  sub: string;
  name: string;
  email: string;
  userType: string;
}
export interface StatusHistory {
  status: string;
  remarks: any;
  createdAt: string;
  user?: StatusHistoryUser;
}
export interface AntdFileDocument {
  name: string;
  type: string;
  uid: string;
}
export interface ServerFileDocument {
  fileId: string;
  fileType: string;
  fileName: string;
  fileObjectKey: string;
  isInitial: boolean;
  isApproved: boolean;
  fileS3Key: string;
}

export interface TravellerFormData extends Omit<Traveller, 'fileDocuments'> {
  passportFrontPage: (PartialAntFile | undefined)[];
  passportBackPage: (PartialAntFile | undefined)[];
  photo: (PartialAntFile | undefined)[];
  fileDocuments: (PartialAntFile | undefined)[];
}
export interface Traveller {
  travellerNo: string;
  title: string;
  surName: string;
  givenName: string;
  gender: string;
  dateOfBirth: string;
  placeOfBirth: string;
  nationality: string;
  nationalityObj: NationalityObj;
  fatherName: string;
  motherName: string;
  maritalStatus: string;
  spouseName?: string;
  passportNumber: string;
  oldPassportNumber: string;
  issuedDate: string;
  dateOfExpiry: string;
  emigrationCheckRequired: boolean;
  religion: any;
  occupation: string;
  mobileNo: string;
  email: string;
  currentStatus: string;
  statusHistory: StatusHistory[];
  fileDocuments: ApplicantDocument[];
  visaDocuments: any[];
}
export interface SourceCountryObj {
  country: string;
  countryCode: string;
  status: boolean;
}

export interface DestinationCountryObj {
  country: string;
  countryCode: string;
  status: boolean;
}

// Cpay Order Response
export interface CreateCpayOrderResponse {
  status: string;
  item: CpayOrder;
}

export interface CpayOrder {
  orderNo: string;
  orderReference: string;
  orderPayload: CpayOrderPayload;
  applicationPayment: ApplicationPayment;
  cpayOrderOption: {
    merchantId: string;
    merchantTokenId: string;
    orderId: string;
  };
}

export interface CpayOrderPayload {
  amount: number;
  order_note: string;
  product: string;
  metadata: Metadata;
}

export interface Metadata {
  visa: VisaMeta;
  contact_details: ContactDetails;
}

export interface VisaMeta {
  visa_type: string;
  source_type: string;
  present_nationality: string;
  passport_number: string;
  first_name: string;
  last_name: string;
  gender: string;
  marital_status: string;
  birth_date: string;
  birth_country: string;
  birth_place: string;
  date_of_issue: string;
  expiration_date: string;
}

export interface ContactDetails {
  email: string;
  mobile: string;
}

export interface ApplicationPayment {
  retrieveOrderDetail: any;
  cpayOrderId: string;
  cpayOrderBookingReference: any;
  id: string;
  applicationId: string;
  orderNo: string;
  platform: string;
  orderDetailObject: OrderDetailObject;
  status: string;
  updatedAt: string;
  createdAt: string;
}

export interface OrderDetailObject {
  amount: number;
  product: string;
  metadata: Metadata;
  order_note: string;
}
