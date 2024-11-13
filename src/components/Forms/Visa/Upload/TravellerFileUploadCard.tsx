import { PassportOcrItem } from '@/services/upload/typings';
import {
  ITravellerDocumentSchemaItem,
  TravellerDocumentFileTypes,
} from '@/types';
import { Col, Row, Typography } from 'antd';
import { Fragment } from 'react/jsx-runtime';
import FileUploader from './FileUploader';

const { Title } = Typography;

const mockMainDocumentsSchema: ITravellerDocumentSchemaItem[] = [
  {
    fieldName: 'passportFrontPage',
    title: "Upload Traveler's Front Passport Page",
    description:
      "Australia requires a scan of the traveler's passport. Upload a clear passport image and your details will be filled automatically. Atlys has built it's own OCR which is 99.9% accurate. However, it is mandatory to review the information before submitting to ensure there are no mistakes. See detailed guidelines for the perfect passport here. Your visa can get rejected if these guidelines are not followed.",
    required: true,
    accept: '.png,.jpg,.jpeg',
    type: TravellerDocumentFileTypes.PASSPORT_FRONT_IMAGE,
  },
  {
    fieldName: 'passportBackPage',
    title: "Upload Traveler's Back Passport Page",
    description:
      "Australia requires a scan of the traveler's passport. Upload a clear passport image and your details will be filled automatically. Atlys has built it's own OCR which is 99.9% accurate. However, it is mandatory to review the information before submitting to ensure there are no mistakes. See detailed guidelines for the perfect passport here. Your visa can get rejected if these guidelines are not followed.",
    required: true,
    accept: '.png,.jpg,.jpeg',
    type: TravellerDocumentFileTypes.PASSPORT_BACK_IMAGE,
  },
  {
    fieldName: 'photo',
    title: 'Upload Traveler Passport Size Photo',
    description:
      'Australia requires a passport-sized photo of the traveler. You can upload a selfie of the traveller and Atlys will resize the photo for you as per the specifications required. See detailed guidelines for the selfie here. Your visa can get rejected if these guidelines are not followed.',
    required: true,
    accept: '.png,.jpg,.jpeg',
    type: TravellerDocumentFileTypes.PHOTO,
  },
];
interface Props {
  onNewOcrData: (file: PassportOcrItem) => void;
}

const TravellerFileUploadCard: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  onNewOcrData,
}) => {
  return (
    <>
      <Row gutter={[24, 24]} align={'top'}>
        <Col md={24} lg={24} xl={8}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              {mockMainDocumentsSchema?.map((document) => {
                return (
                  <Fragment key={document?.fieldName}>
                    <Title level={5}>{document?.title}</Title>
                    {document?.formatDownloadUrl && (
                      <a
                        href={document?.formatDownloadUrl}
                        target="_blank"
                        className="text-primary"
                        rel="noreferrer"
                      >
                        Download Format
                      </a>
                    )}
                    <FileUploader
                      document={document}
                      onNewOcrData={onNewOcrData}
                    />
                  </Fragment>
                );
              })}
            </Col>
          </Row>
        </Col>
        <Col md={24} lg={24} xl={16}>
          {children}
        </Col>
      </Row>
    </>
  );
};

export default TravellerFileUploadCard;
