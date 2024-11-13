import { JWT } from 'aws-amplify/auth';

export enum BookingType {
  Visa = 'VISA',
}
export enum TravellerTitle {
  Mr = 'Mr',
  Ms = 'Ms',
  Mrs = 'Mrs',
  Master = 'Master',
}
export enum AllowedOriginCountries {
  India = 'IN',
}
export enum AllowedNationality {
  India = 'IN',
  Srilanka = 'SL',
}
export enum VisaStepsSlug {
  TravelDetails = 'travel_details',
  AddDocuments = 'add_documents',
  PaymentSummary = 'payment_summary',
}
export enum VisaTypes {
  Tourist = 'TOURIST',
  Business = 'BUSINESS',
  Transit = 'TRANSIT',
}
export enum TravellerMartialStatus {
  Single = 'SINGLE',
  Married = 'MARRIED',
  Separated = 'SEPAPATED',
  Divorced = 'DIVORCED',
  Widowed = 'WIDOWED',
  Civil = 'CIVIL',
  Partnership = 'PARTNERSHIP',
}
export interface ITravellerDocumentSchemaItem {
  fieldName: string;
  title: string;
  type: TravellerDocumentFileTypes;
  required?: boolean;
  description?: string;
  formatDownloadUrl?: string;
  accept?: string;
}
export interface DocumentOptionInfo {
  key: string;
  label: string;
  downloadURL?: string;
}
export interface IRequiredDocumentInfo {
  key: string;
  label: string;
  classifierType: string;
  description?: string;
  downloadURL?: string;
}
export enum EFileReviewStatus {
  Reviewed = 'REVIEWED',
  NotReviewed = 'NOT_REVIEWED',
}

// Visa Details End
export interface ApiResponse {
  status: string;
  item: ApiResponseItem;
}
export interface ApiResponseItem {
  trip: Trip;
  visas: Visa[];
  layovers: any[];
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
  validity: string;
  stayPeriod: string;
  consulateData: ConsulateDatum[];
  source: Source[];
  notes: any[];
  additionalNotes: string[];
  introductionOfVisa: string;
  decisionGuideForVisaApplication: string[];
  securityGuidelinesDuringAppointment: string[];
  financialInformation: string[];
  processOfApplyingVisa: DocumentSpecification[];
  faqs: Faq[];
  latestNewsAlerts: LatestNewsAlert[];
  recommended: boolean;
  urgent: boolean;
  displayName: string;
  masterProductSourceId: string;
  origin: Origin2[];
  destination: Origin2[];
  processingTimeUnit: string;
  visaFeeInInr: VisaFeeInInr[];
  visaFee: VisaFeeInInr[];
  addOnServicesFee: VisaFeeInInr[];
  addOnServicesFeeInr: VisaFeeInInr[];
  productAmount: ProductAmount;
  cancellable: boolean;
}
export interface ProductAmount {
  id: string;
  linkedProductId: string;
  productId: string;
  type: string;
  currency: string;
  totalAmount: number;
  baseAmount: number;
  serviceFee: number;
  serviceFeeAmountModifiers: ServiceFeeAmountModifiers;
  additionalAmountModifiers: AdditionalAmountModifier[];
  status: string;
  updatedAt: string;
  createdAt: string;
}
interface AdditionalAmountModifier {
  type: string;
  name: string;
  currency: string;
  amount: number;
  tax: Tax2;
  associatedConsumerOrganization: string;
  amountCollected: boolean;
}
interface Tax2 {
  totalTax: number;
  totalAmountWithoutTax: number;
}
interface ServiceFeeAmountModifiers {
  type: string;
  name: string;
  currency: string;
  amount: number;
  tax: Tax;
  quantity: number;
  baseAmount: number;
  amountCollected: boolean;
}
interface Tax {
  totalTax: number;
  taxRate: number;
  totalAmountWithoutTax: number;
}
export interface VisaFeeInInr {
  type: string;
  label: string;
  currency: string;
  amount: number;
}
interface Origin2 {
  country: string;
  countryCode: string;
}
interface LatestNewsAlert {
  updatedAt: string;
  title: string;
  summary: string;
}
export interface Faq {
  number: number;
  question: string;
  answer: string;
}
export interface Source {
  type: string;
  link: string;
  createdAt: string;
}
export interface ConsulateDatum {
  label: string;
  value: string;
  allowedStates: any[];
  requiredDocuments: RequiredDocument[];
  requiredVisaForms: RequiredVisaForm[];
  consulateInfo: ConsulateInfo;
}
interface ConsulateInfo {
  name: string;
  description: string;
  holidayListLink: string;
}
export interface RequiredVisaForm {
  formName: string;
  formLink: string;
  validOccupations: string[];
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
interface Trip {
  visaType: string;
  origin: Origin;
  destination: Origin[];
  domestic: boolean;
}
interface Origin {
  countryCode: string;
}
// Visa Details Start
export interface EmailData {
  email: string;
  subject?: string;
  body?: string;
}
export enum ShareVisaInfoListTypes {
  Embassy = 'Embassy/Consulate/Jurisdiction Details',
  VisaFee = 'Visa Fees',
  AddOnsServicesFee = 'Add-ons and other charges',
  VisaForms = 'Visa forms & other formats',
  StepsInvolved = 'Steps Involved',
  FinancialInformation = 'Financial Information',
  RequiredDocuments = 'Required Documents',
  AdditionalDocumentForSelfEmployed = 'SelfEmployed',
  AdditionalDocumentForSalaried = 'Salaried',
  AdditionalDocumentForMeeting = 'Meeting',
  AdditionalDocumentForTraining = 'Training',
  AdditionalDocumentForConference = 'Conference',
  AdditionalNotes = 'Additional Notes',
  DecisionGuideForVisaApplication = 'Decision Guide For Visa',
  FAQs = 'FAQs',
  SecurityGuideLinesDuringAppointment = 'Security GuideLines During Appointment',
  Source = 'Source',
}

// Visa Application Details
export interface VisaApplication {
  consulate: string;
  applicationNo: string;
  sourceCountry: string;
  destinationCountry: string;
  travelDate: string;
  returnDate: string;
  createdAt: string;
  updatedAt: string;
  currentStatus: string;
  totalTravellers: string;
  travellers: Traveller[];
  statusHistory: StatusHistory2[];
}

export interface Traveller {
  travellerNo: string;
  title: string;
  surName: string;
  givenName: string;
  passportNumber: string;
  nationality: string;
  email: string;
  mobileNo: string;
  currentStatus: string;
  statusHistory: StatusHistory[];
}

export interface StatusHistory {
  status: string;
  createdAt: string;
  remarks: any;
}

export interface StatusHistory2 {
  status: string;
  createdAt: string;
  remarks: any;
}

// Visa Application Details

export enum LOGIN_FORM_TYPES {
  NEW_PASSWORD_REQUIRED = 'NEW_PASSWORD_REQUIRED',
  CUSTOM_CHALLENGE = 'CUSTOM_CHALLENGE',
}

export interface CognitoUser {
  challengeName: string;
}
export interface IAuth {
  tokenString: string;
  token: JWT;
}
export interface SigninUserCredentials {
  username: string;
  password: string;
}
export interface SignupUserCredentials extends SigninUserCredentials {
  name: string;
  isIndividual: boolean;
  companyName?: string;
}

// Backend Types
//------------------------ Application attributes ------------------------

export enum ApplicationStatus {
  CREATED = 'CREATED',
  // All tab also needed
  SUBMITTED = 'SUBMITTED', // tab required

  ACTION_REQUIRED = 'ACTION_REQUIRED', // tab required
  VERIFIED = 'VERIFIED', // tab required

  SENT_TO_EXCHANGE = 'SENT_TO_EXCHANGE', // tab required
  SENT_TO_IMM = 'SENT_TO_IMM', // tab required

  APPROVED = 'APPROVED', // tab required
  REJECTED = 'REJECTED', // tab required
  APPROVED_PARTIAL = 'APPROVED_PARTIAL',
  REJECTED_PARTIAL = 'REJECTED_PARTIAL',
}
export enum ApplicationStatusUITabs {
  ALL = 'ALL',
  SUBMITTED = 'SUBMITTED',
  ACTION_REQUIRED = 'ACTION_REQUIRED',
  VERIFIED = 'VERIFIED',
  SENT_TO = 'SENT_TO',
  COMPLETED = 'COMPLETED',
}

export enum TravellerStatus {
  CREATED = 'CREATED', // <-- When user created these applications (Not paid), Action by agent
  SUBMITTED = 'SUBMITTED', // <-- When user make payment and submit these applications, Action by agent

  ACTION_REQUIRED = 'ACTION_REQUIRED', // <-- When admin check these applications and send back to agent, Action by admin
  VERIFIED = 'VERIFIED', // <-- When admin check these applications and verified, Action by admin

  SENT_TO_EXCHANGE = 'SENT_TO_EXCHANGE', // <-- When admin forward these applications to Exchange, Action by admin
  SENT_TO_IMM = 'SENT_TO_IMM', // <-- When admin forward these applications to IMM, Action by admin

  APPROVED = 'APPROVED', // <-- When visa approved and have visa letter, Action by admin
  REJECTED = 'REJECTED', // <-- When admin rejected these applications, Action by admin
}

export enum TravellerGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum TravellerDocumentFileTypes {
  PHOTO = 'PASSPORT_SIZE_PHOTO',
  PASSPORT_FRONT_IMAGE = 'PASSPORT_FRONT_IMAGE',
  PASSPORT_BACK_IMAGE = 'PASSPORT_BACK_IMAGE',
}

export enum TravellerMaritalStatus {
  SINGLE = 'SINGLE',
  MARRIED = 'MARRIED',
  SEPARATED = 'SEPARATED',
  DIVORCED = 'DIVORCED',
  WIDOWED = 'WIDOWED',
  CIVIL = 'CIVIL',
  PARTNERSHIP = 'PARTNERSHIP',
}

export enum TravellerOccupation {
  SELF_EMPLOYED = 'SELF_EMPLOYED',
  SALARIED = 'SALARIED',
  MINOR = 'MINOR',
  STUDENT = 'STUDENT',
  RETIERD = 'RETIRED',
  OTHER = 'OTHER',
}

export enum VisaInfoProviders {
  ON_ARRIVAL = 'ON_ARRIVAL',
}

export enum ApplicationPaymentPlatform {
  PAYBY = 'PAYBY',
  CPAY = 'CPAY',
  SUBMIT = 'SUBMIT', // TODO: added only for testing purposes, for moving ahead without payment
}
export enum CpayBookingStatus {
  RESIZE_CONTAINER = 'RESIZE_CONTAINER',
  BOOKING_ABANDONED = 'BOOKING_ABANDONED',
  SW_CB = 'SW_CB',
  BOOKING_SUCCESS = 'BOOKING_SUCCESS',
}
export enum ApplicationPaymentStatus {
  INIT = 'INIT',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}
// Backend Types

export interface ApiError {
  status: string;
  error: Error;
}

interface Error {
  code: string;
  message: string;
}
export interface PartialAntFile {
  name?: string;
  type?: string;
  uid?: string;
}
