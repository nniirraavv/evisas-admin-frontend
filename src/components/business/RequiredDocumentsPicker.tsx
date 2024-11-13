import { RequiredDocument } from '@/services/visa/typings';
import { uploadApplicantDocument } from '@/services/visaApplication/helper';
import { ApplicantDocument } from '@/services/visaApplication/typings';
import {
  LoadingOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import {
  Col,
  Flex,
  Row,
  Spin,
  Tooltip,
  Typography,
  Upload,
  UploadProps,
} from 'antd';
import { FC, useState } from 'react';

const { Title, Text } = Typography;

const UploadButton = () => (
  <button className="border bg-primary-foreground py-4 px-5" type="button">
    <PlusOutlined />
  </button>
);

interface Props {
  onFileUploaded: (file: ApplicantDocument) => void;
  className?: string;
  uploadedFiles?: any[];
  document: RequiredDocument;
  requiredDocuments: RequiredDocument[];
  applicationNo: string;
  travellerNo: string;
}

const RequiredDocumentsListItem: FC<
  Pick<Props, 'onFileUploaded' | 'document' | 'travellerNo' | 'applicationNo'>
> = ({ onFileUploaded, document, travellerNo, applicationNo }) => {
  const [uploading, setUploading] = useState(false);
  const props: UploadProps = {
    name: 'file',
    accept: 'image/png,image/jpg,image/jpeg',
    maxCount: 1,
    showUploadList: false,
  };

  return (
    <>
      <Flex align="center">
        <Upload
          {...props}
          className="mr-2"
          customRequest={async ({ file, onSuccess, onProgress }) => {
            try {
              setUploading(true);

              const applicantDocument = await uploadApplicantDocument(
                applicationNo,
                travellerNo,
                file,
                document?.documentType,
                onProgress,
                onSuccess,
              );

              if (applicantDocument) onFileUploaded(applicantDocument);
            } finally {
              setUploading(false);
            }
          }}
        >
          <UploadButton />
        </Upload>
        <Text className="mr-2">{document.documentName}</Text>
        <Tooltip title={document.description}>
          <QuestionCircleOutlined />
        </Tooltip>
      </Flex>
      {uploading && (
        <Text className="mr-2">
          <Spin
            indicator={<LoadingOutlined spin />}
            size="small"
            className="mr-2"
          />
          uploading
        </Text>
      )}
    </>
  );
};

const RequiredDocumentsPicker: FC<Omit<Props, 'document'>> = ({
  onFileUploaded,
  className,
  uploadedFiles,
  requiredDocuments,
  travellerNo,
  applicationNo,
}) => {
  return requiredDocuments?.length === 0 &&
    uploadedFiles?.length !== 0 ? null : (
    <Flex vertical className={className}>
      <Title level={5}>Required Documents</Title>
      <Row gutter={[16, 16]}>
        {requiredDocuments?.map((doc) => (
          <Col span={6} key={doc.documentName}>
            <RequiredDocumentsListItem
              onFileUploaded={onFileUploaded}
              document={doc}
              travellerNo={travellerNo}
              applicationNo={applicationNo}
            />
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default RequiredDocumentsPicker;
