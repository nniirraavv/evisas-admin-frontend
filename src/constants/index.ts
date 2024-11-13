import {
  AllowedNationality,
  AllowedOriginCountries,
  TravellerGender,
} from '@/types';

export const DEFAULT_NAME = 'Evisas';
export const AllowedOriginCountryOptions = [
  { label: 'India', value: AllowedOriginCountries.India },
];
export const AllowedNationalityOptions = [
  { label: 'India', value: AllowedNationality.India },
  { label: 'Sri Lanka', value: AllowedNationality.Srilanka },
];
export const IndianStates = [
  { value: 'AP', label: 'Andhra Pradesh' },
  { value: 'AR', label: 'Arunachal Pradesh' },
  { value: 'AS', label: 'Assam' },
  { value: 'BR', label: 'Bihar' },
  { value: 'CG', label: 'Chhattisgarh' },
  { value: 'GA', label: 'Goa' },
  { value: 'GJ', label: 'Gujarat' },
  { value: 'HR', label: 'Haryana' },
  { value: 'HP', label: 'Himachal Pradesh' },
  { value: 'JK', label: 'Jammu and Kashmir' },
  { value: 'JH', label: 'Jharkhand' },
  { value: 'KA', label: 'Karnataka' },
  { value: 'KL', label: 'Kerala' },
  { value: 'MP', label: 'Madhya Pradesh' },
  { value: 'MH', label: 'Maharashtra' },
  { value: 'MN', label: 'Manipur' },
  { value: 'ML', label: 'Meghalaya' },
  { value: 'MZ', label: 'Mizoram' },
  { value: 'NL', label: 'Nagaland' },
  { value: 'OD', label: 'Odisha' },
  { value: 'PB', label: 'Punjab' },
  { value: 'RJ', label: 'Rajasthan' },
  { value: 'SK', label: 'Sikkim' },
  { value: 'TN', label: 'Tamil Nadu' },
  { value: 'TS', label: 'Telangana' },
  { value: 'TR', label: 'Tripura' },
  { value: 'UK', label: 'Uttarakhand' },
  { value: 'UP', label: 'Uttar Pradesh' },
  { value: 'WB', label: 'West Bengal' },
  { value: 'AN', label: 'Andaman and Nicobar Islands' },
  { value: 'CH', label: 'Chandigarh' },
  { value: 'DN', label: 'Dadra and Nagar Haveli' },
  { value: 'DD', label: 'Daman and Diu' },
  { value: 'DL', label: 'Delhi' },
  { value: 'LD', label: 'Lakshadweep' },
  { value: 'PY', label: 'Puducherry' },
];

export const USER_STORAGE_KEY = 'user';
export const UN_AUTHORIZED_STATUS_CODE = 401;
export const TRAVELLER_DETAIL_FIELDS = [
  'title',
  'surName',
  'givenName',
  'gender',
  'dateOfBirth',
  'placeOfBirth',
  'fatherName',
  'motherName',
  'maritalStatus',
  'spouseName',
  'oldPassportNumber',
  'emigrationCheckRequired',
  'passportNumber',
  'issuedDate',
  'dateOfExpiry',
  'occupation',
  'mobileNo',
  'email',
];
export const TravellerGenderOptions = [
  { label: 'MALE', value: TravellerGender.MALE },
  { label: 'FEMALE', value: TravellerGender.FEMALE },
];
export enum DateFormats {
  Server = 'YYYY-MM-DD',
  Client = 'YYYY-MM-DD',
  Client1 = 'DD MMM, YYYY',
}
export const FILE_UPLOAD_URL =
  'https://evisas-document.s3.ap-south-1.amazonaws.com';
export const UPLOAD_STATUS = {
  success: 'SUCCESS',
  failure: 'FAILURE',
};
export const IMAGE_FILE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

export enum ResponseStatus {
  ok = 'ok',
  error = 'error',
}
export const VISA_APPLICATION_DOCUMENT_CLASSIFIERS = [
  {
    value: 'PASSPORT_SIZE_PHOTO',
    label: 'Passport Size Photo',
  },
  {
    value: 'CHAMBER_OF_COMMERCE_LETTER',
    label: 'Chamber of commerce letter',
  },
  {
    value: 'LETTER',
    label: 'LETTER',
  },
  {
    value: 'INTRODUCTION_LETTER',
    label: 'Introduction letter',
  },
  {
    value: 'PAYSLIP',
    label: 'Payslip',
  },
  {
    value: 'RENURE',
    label: 'Renure',
  },
  {
    value: 'ADDITIONAL_DOCUMENT',
    label: 'Additional document',
  },
  {
    value: 'LETTER_FROM_COMOROS',
    label: 'Letter from comoros',
  },
  {
    value: 'AFFIDAVIT',
    label: 'Affidavit',
  },
  {
    value: 'BUSINESS_PROFILE',
    label: 'Business profile',
  },
  {
    value: 'EMPLOYER_LEAVE_LETTER',
    label: 'Employer leave letter',
  },
  {
    value: 'DEMAND_DRAFT',
    label: 'Demand draft',
  },
  {
    value: 'IDENTITY_CARD',
    label: 'Identity card',
  },
  {
    value: 'ARTICLES_OF_MEMORANDUM',
    label: 'Articles of memorandum',
  },
  {
    value: 'BALANCE_SHEET',
    label: 'Balance sheet',
  },
  {
    value: 'LABOUR_MINISTRY_APPROVAL',
    label: 'Labour ministry approval',
  },
  {
    value: 'RECOMMENDATION_LETTER',
    label: 'Recommendation letter',
  },
  {
    value: 'PARENT_PASSPORT',
    label: 'Parent passport',
  },
  {
    value: 'GUARANTEE_LETTER',
    label: 'Guarantee letter',
  },
  {
    value: 'INFORMATION_SHEET',
    label: 'Information sheet',
  },
  {
    value: 'QUESTIONNAIRE',
    label: 'Questionnaire',
  },
  {
    value: 'VACCINATION_CERTIFICATE',
    label: 'Vaccination certificate',
  },
  {
    value: 'TRAVEL_HISTORY',
    label: 'Travel history',
  },
  {
    value: 'APPROVAL_LETTER',
    label: 'Approval letter',
  },
  {
    value: 'BIRTH_CERTIFICATE',
    label: 'Birth certificate',
  },
  {
    value: 'PARENT_VISA',
    label: 'Parent visa',
  },
  {
    value: 'VISA_REQUEST_LETTER',
    label: 'Visa request letter',
  },
  {
    value: 'AADHAR_CARD',
    label: 'Aadhar card',
  },
  {
    value: 'CREDIT_CARD_COPY',
    label: 'Credit card copy',
  },
  {
    value: 'ITINERARY',
    label: 'Itinerary',
  },
  {
    value: 'TOURIST_CONFIRMATION_LETTER',
    label: 'Tourist confirmation letter',
  },
  {
    value: 'COUNSELOR_INTERVIEW_APPOINTMENT_LETTER',
    label: 'Counselor interview appointment letter',
  },
  {
    value: 'INVITATION_LETTER',
    label: 'Invitation letter',
  },
  {
    value: 'FIXED_DEPOSITS',
    label: 'Fixed deposits',
  },
  {
    value: 'CHECKLIST',
    label: 'Checklist',
  },
  {
    value: 'VALID_VISA_RESIDENCE_PERMIT',
    label: 'Valid visa residence permit',
  },
  {
    value: 'PHOTOCOPY_OF_VALID_VISAS',
    label: 'Photocopy of valid visas',
  },
  {
    value: 'COVER_LETTER',
    label: 'Cover letter',
  },
  {
    value: 'SPONSOR_DETAILS',
    label: 'Sponsor details',
  },
  {
    value: 'REFUSAL_LETTER',
    label: 'Refusal letter',
  },
  {
    value: 'RECEIPT',
    label: 'Receipt',
  },
  {
    value: 'FLIGHT_TICKET',
    label: 'Flight ticket',
  },
  {
    value: 'DECLARATION_LETTER',
    label: 'Declaration letter',
  },
  {
    value: 'GST_CERTIFICATE',
    label: 'Gst certificate',
  },
  {
    value: 'POWER_OF_ATTORNEY',
    label: 'Power of attorney',
  },
  {
    value: 'ACADEMIC_CERTIFICATES',
    label: 'Academic certificates',
  },
  {
    value: 'REGISTRATION_PROOF_SAUDI_COMPANY',
    label: 'Registration proof saudi company',
  },
  {
    value: 'RETIRED_DETAILS',
    label: 'Retired details',
  },
  {
    value: 'TRAVEL_AGENCY_STICKER',
    label: 'Travel agency sticker',
  },
  {
    value: 'CERTIFICATE_OF_INCORPORATION',
    label: 'Certificate of incorporation',
  },
  {
    value: 'TRADING_LICENSE',
    label: 'Trading license',
  },
  {
    value: 'VISA_APPLICATION_FORM',
    label: 'Visa application form',
  },
  {
    value: 'NOTIFICATION_LETTER',
    label: 'Notification letter',
  },
  {
    value: 'SELF_ADDRESSES_ENVELOPE',
    label: 'Self addresses envelope',
  },
  {
    value: 'LETTER_OF_AUTHORIZATION',
    label: 'Letter of authorization',
  },
  {
    value: 'CONFIRMATION_LETTER',
    label: 'Confirmation letter',
  },
  {
    value: 'PASSPORT_COVER_IMAGE',
    label: 'Passport cover image',
  },
  {
    value: 'NOTE_VERBAL',
    label: 'Note verbal',
  },
  {
    value: 'COMPANY_PROFILE',
    label: 'Company profile',
  },
  {
    value: 'INFORMATION_LETTER',
    label: 'Information letter',
  },
  {
    value: 'NOTARIZED_CERTIFICATE',
    label: 'Notarized certificate',
  },
  {
    value: 'IDENTITY_PROOF_OF_INVITER',
    label: 'Identity proof of inviter',
  },
  {
    value: 'LETTER_FROM_HOST',
    label: 'Letter from host',
  },
  {
    value: 'POLICE_CLEARANCE_CERTIFICATE',
    label: 'Police clearance certificate',
  },
  {
    value: 'APPLICATION_LETTER',
    label: 'Application letter',
  },
  {
    value: 'MOTIVATION_LETTER',
    label: 'Motivation letter',
  },
  {
    value: 'SCHOOL_ACCEPTANCE_LETTER',
    label: 'School acceptance letter',
  },
  {
    value: 'BUSINESS_LETTER',
    label: 'Business letter',
  },
  {
    value: 'SWORN',
    label: 'Sworn',
  },
  {
    value: 'APPOINTMENT_LETTER',
    label: 'Appointment letter',
  },
  {
    value: 'LETTER_OF_CONTENT',
    label: 'Letter of content',
  },
  {
    value: 'BANK_STATEMENT',
    label: 'Bank statement',
  },
  {
    value: 'COMMERCIAL_DOCUMENT',
    label: 'Commercial document',
  },
  {
    value: 'SCHOOL_NOC',
    label: 'School noc',
  },
  {
    value: 'TRAVELER_DETAILS',
    label: 'Traveler details',
  },
  {
    value: 'PASSPORT_SIZE_PHOTO',
    label: 'Passport size photo',
  },
  {
    value: 'REQUEST_LETTER',
    label: 'Request letter',
  },
  {
    value: 'PASSPORT_BACK_IMAGE',
    label: 'Passport back image',
  },
  {
    value: 'INSURANCE_POLICY',
    label: 'Insurance policy',
  },
  {
    value: 'PASSPORT_FRONT_IMAGE',
    label: 'Passport front image',
  },
  {
    value: 'WORK_EXPERIENCE_LETTERS',
    label: 'Work experience letters',
  },
  {
    value: 'IMPORT_EXPORT_LICENSE',
    label: 'Import export license',
  },
  {
    value: 'ITR',
    label: 'Itr',
  },
  {
    value: 'UNDERTAKING',
    label: 'Undertaking',
  },
  {
    value: 'EMPLOYER_COVER_LETTER',
    label: 'Employer cover letter',
  },
  {
    value: 'HOTEL_RESERVATION',
    label: 'Hotel reservation',
  },
  {
    value: 'CV',
    label: 'Cv',
  },
  {
    value: 'OFFICIAL_DISPATCH_LETTER',
    label: 'Official dispatch letter',
  },
  {
    value: 'MARRIAGE_CERTIFICATE',
    label: 'Marriage certificate',
  },
  {
    value: 'CASH_PROOF',
    label: 'Cash proof',
  },
  {
    value: 'TWO_REFERENCES_GHANA',
    label: 'Two references ghana',
  },
  {
    value: 'ADDRESS_PROOF',
    label: 'Address proof',
  },
  {
    value: 'LETTER_OF_RESPONSIBILITY',
    label: 'Letter of responsibility',
  },
  {
    value: 'PAN_CARD',
    label: 'Pan card',
  },
];
export enum VISA_PROCESSING_TYPE {
  STANDARD = 'STANDARD',
  REGULAR = 'REGULAR',
}
export enum VISA_PROCESSING_TYPE_COLORS {
  blue = 'blue',
  purple = 'purple',
}
export enum VisaApplicationStatusColors {
  CREATED = 'blue',
  SUBMITTED = 'green',

  ACTION_REQUIRED = 'orange',
  VERIFIED = 'lightblue',

  SENT_TO_EXCHANGE = 'purple',
  SENT_TO_IMM = 'pink',

  APPROVED = 'lightgreen',
  REJECTED = 'red',
  APPROVED_PARTIAL = 'grey',
  REJECTED_PARTIAL = 'lightred',
}
export const CPAY_SCRIPT_URL = 'https://front-dev.cpay.ws/checkout/checkout.js';
