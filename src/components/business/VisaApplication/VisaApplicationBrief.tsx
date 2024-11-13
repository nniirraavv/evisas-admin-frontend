import { DateFormats } from '@/constants';
import { getDateByFormat } from '@/lib/dateUtils';
import { getTravellerName } from '@/lib/utils';
import { VisaApplication } from '@/services/visaApplication/typings';
import { CalendarOutlined, TeamOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';
import { FC } from 'react';

const { Text } = Typography;

interface Props {
  visaApplication?: VisaApplication | null;
}

const VisaApplicationBrief: FC<Props> = ({ visaApplication }) => {
  const firstTraveller = visaApplication?.travellers?.[0];
  return visaApplication ? (
    <Space size={'middle'}>
      <Text>{visaApplication?.applicationNo}</Text>
      <span>
        <CalendarOutlined />
        <Text className="ms-1">
          {getDateByFormat({
            date: visaApplication?.travelDate,
            format: DateFormats.Client1,
          })}
        </Text>{' '}
        -
        <Text>
          {getDateByFormat({
            date: visaApplication?.returnDate,
            format: DateFormats.Client1,
          })}
        </Text>
      </span>
      <span>
        <TeamOutlined />
        <Text className="ms-1">{getTravellerName(firstTraveller)}</Text>
      </span>
    </Space>
  ) : null;
};

export default VisaApplicationBrief;
