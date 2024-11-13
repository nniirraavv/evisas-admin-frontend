export interface IResponse {
  status: string;
  item: Item;
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
  type: string;
  label: string;
  currency: string;
  amount: number;
}

export interface VisaFee {
  type: string;
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
