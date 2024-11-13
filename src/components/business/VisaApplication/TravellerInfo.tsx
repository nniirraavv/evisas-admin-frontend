import { DateFormats } from '@/constants';
import { getDateByFormat } from '@/lib/dateUtils';
import { getTravellerName } from '@/lib/utils';
import { Visa } from '@/services/visa/typings';
import { VisaApplication } from '@/services/visaApplication/typings';
import { ProDescriptions } from '@ant-design/pro-components';
import { Card, Flex, Typography } from 'antd';
import { FC } from 'react';
import ProcessingType from '../Tags/ProcessingType/ProcessingType';

const { Title, Text } = Typography;

interface Props {
  visaInfo?: Visa | null;
  visaApplication?: VisaApplication | null;
  includeAdditionalDetails?: boolean;
}

const TravellerInfo: FC<Props> = ({
  visaInfo,
  visaApplication,
  includeAdditionalDetails,
}) => {
  const firstTraveller = visaApplication?.travellers?.[0];
  return (
    <Card className="h-full">
      <ProDescriptions<Visa>
        title={
          <Flex justify="space-between">
            <Title level={3}>{visaInfo?.name}</Title>
            <ProcessingType value={visaInfo?.processingType} />
          </Flex>
        }
        column={4}
        dataSource={visaInfo ?? undefined}
        layout="vertical"
      >
        {includeAdditionalDetails ? (
          <>
            <ProDescriptions.Item
              label="Primary traveller"
              render={() => <Text>{getTravellerName(firstTraveller)}</Text>}
              valueType="text"
            />
            <ProDescriptions.Item
              label="Travel duration"
              render={() => (
                <Text>{`${getDateByFormat({
                  date: visaApplication?.travelDate,
                  format: DateFormats.Client1,
                })} - ${getDateByFormat({
                  date: visaApplication?.returnDate,
                  format: DateFormats.Client1,
                })}`}</Text>
              )}
              valueType="text"
            />
            <ProDescriptions.Item
              label="Created On"
              render={() => (
                <Text>
                  {getDateByFormat({
                    date: visaApplication?.createdAt,
                    format: DateFormats.Client1,
                  }) || '-'}
                </Text>
              )}
              valueType="text"
            />
            <ProDescriptions.Item
              label="Trip Type"
              render={() => (
                <Text>
                  {visaApplication?.visaInformation?.visaInfoObject?.tripType ||
                    '-'}
                </Text>
              )}
              valueType="text"
            />
            <ProDescriptions.Item
              label="Consulate"
              render={() => <Text>{visaApplication?.consulate || '-'}</Text>}
              valueType="text"
            />
          </>
        ) : null}
        <ProDescriptions.Item
          label="Processing Time"
          render={(_, entity) => {
            return <Text>{entity?.processingTime}</Text>;
          }}
          valueType="text"
        />
        <ProDescriptions.Item
          label="Stay Period"
          render={(_, entity) => {
            return <Text>{entity?.stayPeriod || '-'}</Text>;
          }}
          valueType="text"
        ></ProDescriptions.Item>
        <ProDescriptions.Item
          label="Validity"
          render={(_, entity) => {
            return <Text>{entity?.validity || '-'}</Text>;
          }}
          valueType="text"
        ></ProDescriptions.Item>
        <ProDescriptions.Item
          label="Visa Type"
          render={(_, entity) => {
            return <Text>{entity?.visaType || '-'}</Text>;
          }}
          valueType="text"
        ></ProDescriptions.Item>
      </ProDescriptions>
    </Card>
  );
};

export default TravellerInfo;
