import { getDateTimeFormat } from '@/lib/dateUtils';
import { StatusHistory } from '@/services/visaApplication/typings';
import { UserTypes } from '@/types';
import { CrownOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { Typography } from 'antd';
import { FC } from 'react';
import VisaApplicationStatus from '../Tags/VisaApplicationStatus/VisaApplicationStatus';

const { Title, Text, Paragraph } = Typography;

interface Props {
  statusHistory?: StatusHistory[];
}
const ActivityLogs: FC<Props> = ({ statusHistory }) => {
  return (
    <ProList<StatusHistory>
      rowKey="id"
      headerTitle={<Title level={5}>Activity Logs</Title>}
      dataSource={statusHistory}
      metas={{
        title: {
          dataIndex: 'user',
          render(_, entity) {
            return (
              <Text strong>
                {entity?.user?.userType === UserTypes.ADMIN ? (
                  <Text>
                    <CrownOutlined className="me-2" />
                    Admin
                  </Text>
                ) : (
                  entity?.user?.name
                )}
              </Text>
            );
          },
        },
        description: {
          dataIndex: 'remarks',
          render(dom, entity) {
            return entity?.remarks ? (
              <>
                <Text>Remarks</Text>:
                <Paragraph type="secondary">{entity?.remarks}</Paragraph>
              </>
            ) : null;
          },
        },
        subTitle: {
          dataIndex: 'status',
          render(_, entity) {
            return <VisaApplicationStatus value={entity?.status} />;
          },
        },
        content: {
          dataIndex: 'createdAt',
          render(_, entity) {
            return getDateTimeFormat(entity?.createdAt);
          },
        },
      }}
    />
  );
};

export default ActivityLogs;
