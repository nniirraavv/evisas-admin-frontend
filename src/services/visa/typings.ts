import { VisaInfoProviders } from '@/types';

export interface IResponse {
  status: string;
  item: Item;
}
export interface IVisaInfoResponse {
  status: string;
  item: {
    id: string;
    visaId: string;
    visaInfoProvider: VisaInfoProviders;
    visaInfoObject: Visa;
  };
}
export interface VisaSearchInfo {
  visaInfo: VisaInformation;
  sourceCountry?: string;
  destinationCountry?: string;
}
export interface Item {
  trip: Trip;
  visas: Visa[];
  layovers: any[];
}

export interface Trip {
  visaType: string;
  origin: Origin;
  destination: Destination[];
  domestic: boolean;
}

export interface Origin {
  countryCode: string;
}

export interface Destination {
  countryCode: string;
}
export interface VisaSearchParams {
  /** originCountryCode */
  originCountryCode: string;
  /** destinationCountryCode */
  destinationCountryCode: string;
  /** departure */
  visaType?: string;
}
export interface Visa {
  updatedAt: string;
  id: string;
  createdAt: string;
  productType: string;
  name: string;
  country: string;
  visaType: string;
  tripType: string;
  processingTime: string;
  minProcessingTime: number;
  maxProcessingTime: number;
  processingType: string;
  consulateData: ConsulateDaum[];
  source: Source[];
  notes: any[];
  additionalNotes: string[];
  introductionOfVisa: string;
  decisionGuideForVisaApplication: string[];
  securityGuidelinesDuringAppointment: string[];
  financialInformation: string[];
  processOfApplyingVisa: ProcessOfApplyingVisa[];
  faqs: Faq[];
  latestNewsAlerts: LatestNewsAlert[];
  recommended: boolean;
  urgent: boolean;
  displayName: string;
  masterProductSourceId: string;
  origin: Origin2[];
  destination: Destination2[];
  processingTimeUnit: string;
  visaFeeInInr: VisaFeeInInr[];
  visaFee: VisaFee[];
  addOnServicesFee: AddOnServicesFee[];
  addOnServicesFeeInr: AddOnServicesFeeInr[];
  cancellable: boolean;
  visaInfoProvider: VisaInfoProviders;
}

export interface ConsulateDaum {
  label: string;
  value: string;
  allowedStates: any[];
  requiredDocuments: RequiredDocument[];
  requiredVisaForms: RequiredVisaForm[];
  consulateInfo: ConsulateInfo;
}

export interface RequiredDocument {
  fieldName: string;
  fieldType: string;
  documentName: string;
  documentType: string;
  submitted: boolean;
  description: string;
  supplierDocumentId: string;
  supplierSpecific: boolean;
  documentSpecifications: DocumentSpecification[];
  applicableFor?: string[];
  required?: boolean;
  documentSamples?: string[];
}

export interface DocumentSpecification {
  number: number;
  description: string;
}

export interface RequiredVisaForm {
  formName: string;
  formLink: string;
  validOccupations: string[];
}

export interface ConsulateInfo {
  name: string;
  description: string;
  holidayListLink: string;
}

export interface Source {
  type: string;
  link: string;
  createdAt: string;
}

export interface ProcessOfApplyingVisa {
  number: number;
  description: string;
}

export interface Faq {
  number: number;
  question: string;
  answer: string;
}

export interface LatestNewsAlert {
  updatedAt: string;
  title: string;
  summary: string;
}

export interface Origin2 {
  country: string;
  countryCode: string;
}

export interface Destination2 {
  country: string;
  countryCode: string;
}

export interface VisaFeeInInr {
  type: VisaFeeType;
  label: string;
  currency: string;
  amount: number;
}

export interface VisaFee {
  type: VisaFeeType;
  label: string;
  currency: string;
  amount: number;
}

export interface AddOnServicesFee {
  type: string;
  label: string;
  currency: string;
  amount: number;
}

export interface AddOnServicesFeeInr {
  type: string;
  label: string;
  currency: string;
  amount: number;
}
export enum VisaFeeType {
  ADULT = 'ADULT',
  CHILD = 'CHILD',
}
export interface VisaInformation {
  visaInfoProvider: string;
  visaInfoObject: Visa;
}
// export interface VisaInfoObject {
//   id: string;
//   faqs: Faq[];
//   name: string;
//   notes: any[];
//   origin: Origin[];
//   source: Source[];
//   urgent: boolean;
//   country: string;
//   visaFee: VisaFee[];
//   tripType: string;
//   visaType: string;
//   createdAt: string;
//   updatedAt: string;
//   cancellable: boolean;
//   destination: Destination[];
//   displayName: string;
//   productType: string;
//   recommended: boolean;
//   visaFeeInInr: VisaFeeInInr[];
//   consulateData: ConsulateDaum[];
//   processingTime: string;
//   processingType: string;
//   additionalNotes: string[];
//   addOnServicesFee: AddOnServicesFee[];
//   latestNewsAlerts: LatestNewsAlert[];
//   maxProcessingTime: number;
//   minProcessingTime: number;
//   introductionOfVisa: string;
//   processingTimeUnit: string;
//   addOnServicesFeeInr: AddOnServicesFeeInr[];
//   financialInformation: string[];
//   masterProductSourceId: string;
//   processOfApplyingVisa: ProcessOfApplyingVisa[];
//   decisionGuideForVisaApplication: string[];
//   securityGuidelinesDuringAppointment: string[];
// }
