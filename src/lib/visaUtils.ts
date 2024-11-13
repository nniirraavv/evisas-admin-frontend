import {
  TRAVELLER_DETAIL_FIELDS,
  VISA_APPLICATION_DOCUMENT_CLASSIFIERS,
  VISA_PROCESSING_TYPE,
  VISA_PROCESSING_TYPE_COLORS,
  VisaApplicationStatusColors,
} from '@/constants';
import { PassportOcrItem } from '@/services/upload/typings';
import {
  Traveller,
  TravellerFormData,
  VisaApplication,
} from '@/services/visaApplication/typings';
import {
  ApplicationStatus,
  TravellerDocumentFileTypes,
  TravellerGender,
} from '@/types';
import { normalizeToServerDate } from './dateUtils';
import { mapServerFileToAntFile } from './uploadUtils';

export function mapPassportOcr(data: PassportOcrItem) {
  const result: any = {};
  for (const key in data) {
    if (!TRAVELLER_DETAIL_FIELDS.includes(key)) {
      continue;
    }
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const element = data[key];
      if (element.confidence) {
        if (key === 'gender') {
          // Work around for gender field
          result[key] =
            element?.value === 'F'
              ? TravellerGender.FEMALE
              : TravellerGender.MALE;
        } else if (key === 'issuedDate' || key === 'dateOfExpiry') {
          result[key] = normalizeToServerDate(element?.value);
        } else {
          result[key] = element?.value;
        }
      }
    }
  }
  return result;
}
export function getDocumentClassifierName(documentType: string) {
  return (
    VISA_APPLICATION_DOCUMENT_CLASSIFIERS?.find((d) => d.value === documentType)
      ?.label || documentType
  );
}
export function getVisaProcessingTypeTagColor(processingType?: string) {
  if (!processingType) return;
  let color;
  switch (processingType.toUpperCase()) {
    case VISA_PROCESSING_TYPE.STANDARD:
      color = VISA_PROCESSING_TYPE_COLORS.purple;
      break;
    case VISA_PROCESSING_TYPE.REGULAR:
      color = VISA_PROCESSING_TYPE_COLORS.blue;
      break;

    default:
      break;
  }
  return color;
}
export function getVisaApplicationStatusTagColor(applicationStatus?: string) {
  if (!applicationStatus) return;
  let color;
  switch (applicationStatus.toUpperCase()) {
    case ApplicationStatus.ACTION_REQUIRED:
      color = VisaApplicationStatusColors.ACTION_REQUIRED;
      break;
    case ApplicationStatus.APPROVED:
      color = VisaApplicationStatusColors.APPROVED;
      break;
    case ApplicationStatus.APPROVED_PARTIAL:
      color = VisaApplicationStatusColors.APPROVED_PARTIAL;
      break;
    case ApplicationStatus.CREATED:
      color = VisaApplicationStatusColors.CREATED;
      break;
    case ApplicationStatus.REJECTED:
      color = VisaApplicationStatusColors.REJECTED;
      break;
    case ApplicationStatus.REJECTED_PARTIAL:
      color = VisaApplicationStatusColors.REJECTED_PARTIAL;
      break;
    case ApplicationStatus.SENT_TO_EXCHANGE:
      color = VisaApplicationStatusColors.SENT_TO_EXCHANGE;
      break;
    case ApplicationStatus.SENT_TO_IMM:
      color = VisaApplicationStatusColors.SENT_TO_IMM;
      break;
    case ApplicationStatus.SUBMITTED:
      color = VisaApplicationStatusColors.SUBMITTED;
      break;
    case ApplicationStatus.VERIFIED:
      color = VisaApplicationStatusColors.VERIFIED;
      break;

    default:
      break;
  }
  return color;
}
export function removeUnderscores(text?: string, replaceWith?: string) {
  return text?.replace(/_/g, replaceWith || '');
}
export function mapVisaApplicantToForm(
  traveller: Traveller,
): TravellerFormData {
  const fileDocuments = traveller?.fileDocuments?.map((document) => {
    return mapServerFileToAntFile(document);
  });
  const passportFrontPage = fileDocuments?.filter(
    (document) =>
      document?.type === TravellerDocumentFileTypes.PASSPORT_FRONT_IMAGE,
  );
  const passportBackPage = fileDocuments?.filter(
    (document) =>
      document?.type === TravellerDocumentFileTypes.PASSPORT_BACK_IMAGE,
  );
  const photo = fileDocuments?.filter(
    (document) => document?.type === TravellerDocumentFileTypes.PHOTO,
  );
  return {
    ...traveller,
    passportFrontPage,
    passportBackPage,
    photo,
    fileDocuments,
  };
}
export function mapVisaApplicationDataToForm(data?: VisaApplication) {
  if (!data) return;

  return {
    ...data,
    travellers: data?.travellers?.map(mapVisaApplicantToForm),
  };
}
