import { ApplicantDocument } from '@/services/visaApplication/typings';
import { CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';
import { Flex, Typography } from 'antd';
import { FC } from 'react';

const { Text } = Typography;

interface Props {
  file: ApplicantDocument;
}

const FileReviewStatus: FC<Props> = ({ file }) => {
  return file?.isApproved ? (
    <Flex>
      <CheckCircleFilled className="text-success mr-2" />{' '}
      <Text className="text-success">{'Reviewed'}</Text>
    </Flex>
  ) : (
    <Flex>
      <ExclamationCircleFilled className="text-destructive mr-2" />{' '}
      <Text className="text-destructive">{'Not Reviewed'}</Text>
    </Flex>
  );
};

export default FileReviewStatus;
