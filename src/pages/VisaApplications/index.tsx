import CountryFlag from '@/components/business/CountryFlag';
import VisaApplicationStatus from '@/components/business/Tags/VisaApplicationStatus/VisaApplicationStatus';
import { DateFormats, ResponseStatus } from '@/constants';
import { getDateByFormat } from '@/lib/dateUtils';
import { getTravellerName, sortTypeMapper } from '@/lib/utils';
import {
  StatusHistory,
  VisaApplication,
} from '@/services/visaApplication/typings';
import {
  deleteVisaApplication,
  getVisaApplications,
} from '@/services/visaApplication/VisaApplicationController';
import { ApplicationStatus } from '@/types';
import { DeleteOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import { useUpdateEffect } from 'ahooks';
import {
  Button,
  Flex,
  List,
  message,
  Popconfirm,
  Popover,
  Space,
  Tooltip,
  Typography,
} from 'antd';
import { FC, useRef, useState } from 'react';

const { Text } = Typography;

interface Props {
  applicationStatus: string;
}

const VisaApplicationTable: FC<Props> = ({ applicationStatus }) => {
  const tableActionRef = useRef<ActionType>();
  const navigate = useNavigate();

  const handleSelect = (entity: VisaApplication) => {
    navigate(`/visa/applications/${entity.applicationNo}`);
  };
  const handleDelete = async (entity: VisaApplication) => {
    try {
      await deleteVisaApplication(entity?.applicationNo);
      tableActionRef?.current?.reload();
      message.success('Visa application deleted successfully!');
    } catch (error) {
      console.log('Error on delete: ', error);
    }
  };

  useUpdateEffect(() => {
    tableActionRef?.current?.reload();
  }, [applicationStatus]);

  const columns: ProColumns<VisaApplication, 'text'>[] = [
    { title: 'Search', dataIndex: 'search', hideInTable: true },
    {
      title: 'Visa Application No.',
      dataIndex: 'applicationNo',
      hideInSearch: true,
    },
    {
      title: 'Travellers',
      dataIndex: 'travellers',
      hideInSearch: true,
      render(_, entity) {
        return (
          <Flex>
            <Text>
              {getTravellerName(entity?.travellers?.[0])}{' '}
              {entity?.travellers.length > 1 ? (
                <Popover
                  className="ml-2 text-primary cursor-pointer"
                  placement="bottom"
                  content={
                    <div>
                      {entity?.travellers
                        ?.filter((t, i) => i === 0)
                        ?.map((t) => (
                          <Text key={t.email}>{getTravellerName(t)}</Text>
                        ))}
                    </div>
                  }
                >
                  +1 more
                </Popover>
              ) : null}
            </Text>
          </Flex>
        );
      },
    },
    {
      title: 'Source',
      dataIndex: 'sourceCountry',
      hideInSearch: true,
      render(_, entity) {
        return (
          <CountryFlag
            countryCode={entity?.sourceCountry}
            title={entity?.sourceCountry}
          />
        );
      },
    },
    {
      title: 'Destination',
      dataIndex: 'destinationCountry',
      hideInSearch: true,
      search: true,
      render(_, entity) {
        return (
          <CountryFlag
            countryCode={entity?.destinationCountry}
            title={entity?.destinationCountry}
          />
        );
      },
    },
    {
      title: 'Status',
      dataIndex: 'currentStatus',
      hideInSearch: true,
      valueEnum: {
        CREATED: { text: 'CREATED', status: 'CREATED' },
        SUBMITTED: { text: 'SUBMITTED', status: 'SUBMITTED' },
        ORDER_QUOTE: { text: 'ORDER QUOTE', status: 'ORDER_QUOTE' },
      },
      render(_, entity) {
        return (
          <Flex>
            <VisaApplicationStatus value={entity.currentStatus} />
            {entity?.statusHistory.length > 1 ? (
              <Popover
                className="ml-2 text-primary cursor-pointer"
                placement="bottom"
                content={
                  <List<StatusHistory>
                    dataSource={entity?.statusHistory}
                    itemLayout="vertical"
                    split={true}
                    size="large"
                    renderItem={(history) => (
                      <div key={history.createdAt} className="mb-2">
                        <VisaApplicationStatus value={history.status} />
                        on{' '}
                        {getDateByFormat({
                          date: history.createdAt,
                          format: DateFormats.Client,
                        })}
                      </div>
                    )}
                  ></List>
                }
              >
                +1 more
              </Popover>
            ) : null}
          </Flex>
        );
      },
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      sorter: true,
      render(_, entity) {
        return getDateByFormat({
          date: entity?.createdAt,
          format: DateFormats.Client,
        });
      },
      hideInSearch: true,
    },
    {
      title: 'Upldated At',
      dataIndex: 'updatedAt',
      sorter: true,
      render(_, entity) {
        return getDateByFormat({
          date: entity?.updatedAt,
          format: DateFormats.Client,
        });
      },
      hideInSearch: true,
    },
    {
      hideInSearch: true,
      render(_, entity) {
        return (
          <Space>
            <Tooltip title="View visa application" placement="left">
              <Button
                type="primary"
                icon={<EyeOutlined />}
                onClick={() => handleSelect(entity)}
              ></Button>
            </Tooltip>
            <Popconfirm
              title="Delete Visa Application"
              description="Are you sure to delete this visa application?"
              onConfirm={(e) => {
                e?.preventDefault();
                e?.stopPropagation();
                handleDelete(entity);
              }}
              okText="Yes"
              cancelText="No"
            >
              <Tooltip title="Delete visa application" placement="left">
                <Button type="primary" icon={<DeleteOutlined />}></Button>
              </Tooltip>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <ProTable<VisaApplication>
      headerTitle="Visa Applications"
      actionRef={tableActionRef}
      rowKey="id"
      search={{
        labelWidth: 120,
        searchText: 'Search',
        layout: 'vertical',
      }}
      pagination={{ pageSize: 10 }}
      request={async (params, sorter) => {
        const sortField = Object.keys(sorter)?.[0];
        const sortOrder = sortTypeMapper(Object.values(sorter)?.[0]);
        const {
          status,
          page: { items },
          total,
        } = await getVisaApplications({
          page: params?.current,
          pageSize: params?.pageSize,
          status: applicationStatus || undefined,
          search: params?.search || undefined,
          sortField,
          sortOrder,
        });
        if (status === ResponseStatus.ok) {
          return {
            data:
              items?.map((i) => ({
                ...i,
                statusHistory: [...(i?.statusHistory || [])],
              })) || [],
            success: true,
            total,
          };
        }
        return {
          data: [],
          success: false,
        };
      }}
      columns={columns}
    />
  );
};

const VisaApplications = () => {
  const [activeKey, setActiveKey] = useState<string>(ApplicationStatus.CREATED);
  const navigate = useNavigate();

  const handleAddVisaApplication = () => navigate('/apply');
  return (
    <PageContainer
      tabList={[
        {
          key: ApplicationStatus.CREATED,
          tab: 'Created',
        },
        {
          key: ApplicationStatus.SUBMITTED,
          tab: 'Submitted',
        },
        {
          key: ApplicationStatus.ACTION_REQUIRED,
          tab: 'Action Required',
        },
      ]}
      tabActiveKey={activeKey}
      tabBarExtraContent={
        <Tooltip title="Add new visa application" placement="left">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAddVisaApplication}
          >
            Add
          </Button>
        </Tooltip>
      }
      onTabChange={setActiveKey}
    >
      <VisaApplicationTable applicationStatus={activeKey} />
    </PageContainer>
  );
};

export default VisaApplications;
