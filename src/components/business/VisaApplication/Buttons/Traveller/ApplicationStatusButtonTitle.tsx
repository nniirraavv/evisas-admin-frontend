import { getVisaApplicationStatusTagColor } from '@/lib/visaUtils';
import { ApplicationStatus } from '@/types';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DollarCircleOutlined,
  ExclamationCircleOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
import { FC, useMemo } from 'react';

interface Props {
  applicationStatus: ApplicationStatus;
}

const ApplicationStatusButtonTitle: FC<Props> = ({ applicationStatus }) => {
  const [icon, titleText] = useMemo(() => {
    let iconElement = null;
    let titleText = '';
    const color = getVisaApplicationStatusTagColor(applicationStatus);
    switch (applicationStatus) {
      case ApplicationStatus.ACTION_REQUIRED:
        iconElement = <ExclamationCircleOutlined style={{ color }} />;
        titleText = 'Mark As Action Reqiured';
        break;
      case ApplicationStatus.APPROVED:
        iconElement = <CheckCircleOutlined style={{ color }} />;
        titleText = 'Mark As Approved';
        break;
      case ApplicationStatus.VERIFIED:
        iconElement = <CheckCircleOutlined style={{ color }} />;
        titleText = 'Mark As Verified';
        break;
      case ApplicationStatus.REJECTED:
        iconElement = <CloseCircleOutlined style={{ color }} />;
        titleText = 'Mark As Rejected';
        break;
      case ApplicationStatus.SENT_TO_EXCHANGE:
        iconElement = <DollarCircleOutlined style={{ color }} />;
        titleText = 'Exchange';
        break;
      case ApplicationStatus.SENT_TO_IMM:
        iconElement = <GlobalOutlined style={{ color }} />;
        titleText = 'Immigration';
        break;

      default:
        break;
    }
    return [iconElement, titleText];
  }, [applicationStatus]);

  return (
    <Space>
      {icon}
      {titleText}
    </Space>
  );
};

export default ApplicationStatusButtonTitle;
