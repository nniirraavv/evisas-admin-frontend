import VisaForm from '@/components/Forms/Visa/VisaSearchForm';
import { BookingType } from '@/types';
import { UserOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import { Typography } from 'antd';
import qs from 'qs';
import { useMemo, useState } from 'react';

const { Title } = Typography;

const getTabContentByTabKey = (key: BookingType) => {
  let content = '';
  switch (key) {
    case BookingType.Visa:
      content = 'Apply for your visa today!';
      break;

    default:
      break;
  }
  return content;
};

const VisaApply: React.FC<any> = () => {
  const [tabActiveKey, setTabActiveKey] = useState<string>(BookingType.Visa);
  const navigate = useNavigate();

  const tabContent = useMemo(
    () => getTabContentByTabKey(tabActiveKey as BookingType),
    [tabActiveKey],
  );

  return (
    <PageContainer
      style={{ height: '100%' }}
      backIcon={<UserOutlined />}
      content={<Title level={3}>{tabContent}</Title>}
      tabProps={{ size: 'large' }}
      tabList={[
        {
          tab: 'Visa',
          key: BookingType.Visa,
        },
      ]}
      tabActiveKey={tabActiveKey}
      onTabChange={setTabActiveKey}
    >
      <VisaForm
        className="max-w-xl"
        layout="vertical"
        onFinish={(values) => {
          const queryString = qs.stringify({
            ...values,
            originCountryCode: values?.originCountryCode?.value,
            destinationCountryCode: values?.destinationCountryCode?.value,
          });
          navigate(`/apply/visa?${queryString}`);
        }}
      />
    </PageContainer>
  );
};

export default VisaApply;
