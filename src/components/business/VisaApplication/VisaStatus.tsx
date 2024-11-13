import { getTravellerName } from '@/lib/utils';
import { VisaApplication } from '@/services/visaApplication/typings';
import { ProCard } from '@ant-design/pro-components';
import { Avatar, Empty, Flex, Typography } from 'antd';
import { FC } from 'react';
import VisaApplicationStatus from '../Tags/VisaApplicationStatus/VisaApplicationStatus';

const { Text } = Typography;
interface Props {
  data?: VisaApplication | null;
}
const VisaStatus: FC<Props> = ({ data }) => {
  const firstTraveller = data?.travellers?.[0];
  const initials = firstTraveller?.givenName?.[0]?.toUpperCase();
  const status = data?.statusHistory?.find(
    (h) => h?.status === data?.currentStatus,
  );
  return (
    <ProCard title="Visa Status">
      {data ? (
        <Flex justify="space-between">
          <Flex>
            <Avatar size={48} className="me-2">
              {initials}
            </Avatar>
            <Flex vertical>
              <Text>{getTravellerName(firstTraveller)}</Text>
              <Text type="secondary">{firstTraveller?.email}</Text>
            </Flex>
          </Flex>
          {status?.status ? (
            <Flex vertical justify="end" align="start">
              <VisaApplicationStatus value={status?.status} />
              {status?.remarks && (
                <Text type="secondary">
                  <b>Remarks:</b> {status?.remarks}
                </Text>
              )}
            </Flex>
          ) : null}
        </Flex>
      ) : (
        <Empty />
      )}
    </ProCard>
  );
};

export default VisaStatus;
