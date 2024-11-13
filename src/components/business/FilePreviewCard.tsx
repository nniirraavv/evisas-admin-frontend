import { VISA_APPLICATION_DOCUMENT_CLASSIFIERS } from '@/constants';
import { isFileImage } from '@/lib/utils';
import { ApplicantDocument } from '@/services/visaApplication/typings';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Flex, Form, Image, Select, Typography } from 'antd';
import { FC } from 'react';
import SuccessButton from '../general/SuccessButton';

const { Text } = Typography;

interface Props {
  documentClassifier: { label: string; value: string }[];
  file: ApplicantDocument;
  onFileApproved?: (file: any) => void;
  onFileDelete?: (file: any) => void;
  onClassifierChange?:
    | ((
        value: any,
        option:
          | {
              label: string;
              value: string;
            }
          | {
              label: string;
              value: string;
            }[],
      ) => void)
    | undefined;
  readonly?: boolean;
}

const FilePreviewCard: FC<Props> = ({
  file,
  onFileApproved,
  onFileDelete,
  onClassifierChange,
  readonly,
}) => {
  return (
    <>
      <Flex justify="space-between" align="center">
        <Form.Item
          label="Classified as"
          layout="vertical"
          style={{ width: '100%' }}
          className="mr-2"
          initialValue={file.fileType}
        >
          <Select
            showSearch
            options={VISA_APPLICATION_DOCUMENT_CLASSIFIERS}
            value={file.fileType}
            disabled={readonly || file.isApproved}
            onChange={onClassifierChange}
          />
        </Form.Item>
        <Button
          icon={<DeleteOutlined />}
          type="primary"
          danger
          className="mr-2 mt-2"
          disabled={readonly}
          onClick={() => onFileDelete?.(file)}
        >
          Delete
        </Button>
        <SuccessButton
          icon={<CheckOutlined />}
          disabled={readonly}
          className="mt-2"
          onClick={() => {
            onFileApproved?.({ ...file });
          }}
        >
          Approve
        </SuccessButton>
      </Flex>
      {isFileImage(file?.fileName) ? (
        <Image
          width={'100%'}
          height={500}
          src={file?.fileS3Key}
          preview={false}
        />
      ) : (
        <Card title="Selected PDF Document">
          <Text>{file?.fileName}</Text>
        </Card>
      )}
    </>
  );
};

export default FilePreviewCard;
