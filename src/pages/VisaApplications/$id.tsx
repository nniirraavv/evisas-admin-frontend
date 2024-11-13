import ActivityLogs from '@/components/business/VisaApplication/ActivityLogs';
import PaymentSummary from '@/components/business/VisaApplication/PaymentSummary';
import SubmitVisaApplication from '@/components/business/VisaApplication/SubmitVisaApplication';
import TravelIerInformation from '@/components/business/VisaApplication/TravelIerInformation';
import TravellerInfo from '@/components/business/VisaApplication/TravellerInfo';
import VisaApplicationBrief from '@/components/business/VisaApplication/VisaApplicationBrief';
import VisaStatus from '@/components/business/VisaApplication/VisaStatus';
import VisaSummary from '@/components/business/VisaApplication/VisaSummary';
import { getVisaApplication } from '@/services/visaApplication/VisaApplicationController';
import { ApplicationStatus } from '@/types';
import { PageContainer } from '@ant-design/pro-components';
import { useModel, useParams } from '@umijs/max';
import { useMount } from 'ahooks';
import { Spin } from 'antd';
import { useState } from 'react';
enum VisaApplicationTabs {
  ActivityLog = 'Activity Log',
  TravelDetails = 'Travel Details',
  TravellerInfo = 'Traveller Info',
  PaymentSummary = 'Payment Summary',
  VisaSummary = 'Visa Summary',
  VisaStatus = 'Visa Status',
}
const VisaApplication = () => {
  const { applicationNo } = useParams();
  const [tabActiveKey, setTabActiveKey] = useState<string>(
    VisaApplicationTabs.ActivityLog,
  );
  const [spinning, setSpinning] = useState(false);
  const { data: visaApplication, setData: setVisaApplication } =
    useModel('visaApplication');

  const fetchVisaApplicationInfo = async () => {
    if (!applicationNo) return;
    try {
      setSpinning(true);
      const response = await getVisaApplication(applicationNo);
      if (response) setVisaApplication(response.item);
    } finally {
      setSpinning(false);
    }
  };

  useMount(fetchVisaApplicationInfo);

  const handleVisaApplicationTravellerUpdate = () => fetchVisaApplicationInfo();
  const handleVisaApplicationTravellerDelete = () => fetchVisaApplicationInfo();
  const handleVisaApplicationTravellerCreate = () => fetchVisaApplicationInfo();

  const tabsList = [
    {
      key: VisaApplicationTabs.ActivityLog,
      tab: VisaApplicationTabs.ActivityLog,
      children: <ActivityLogs statusHistory={visaApplication?.statusHistory} />,
    },
    {
      key: VisaApplicationTabs.TravelDetails,
      tab: VisaApplicationTabs.TravelDetails,
      children: (
        <TravellerInfo
          visaInfo={visaApplication?.visaInformation?.visaInfoObject}
          visaApplication={visaApplication}
          includeAdditionalDetails
        />
      ),
    },
    {
      key: VisaApplicationTabs.TravellerInfo,
      tab: VisaApplicationTabs.TravellerInfo,
      children: (
        <TravelIerInformation
          onTravellerUpdate={handleVisaApplicationTravellerUpdate}
          onTravellerDelete={handleVisaApplicationTravellerDelete}
          onTravellerCreate={handleVisaApplicationTravellerCreate}
        />
      ),
    },
    {
      key: VisaApplicationTabs.PaymentSummary,
      tab: VisaApplicationTabs.PaymentSummary,
      children: <PaymentSummary allowPaymentAction />,
    },
    {
      key: VisaApplicationTabs.VisaSummary,
      tab: VisaApplicationTabs.VisaSummary,
      children: (
        <VisaSummary data={visaApplication?.visaInformation?.visaInfoObject} />
      ),
    },
    {
      key: VisaApplicationTabs.VisaStatus,
      tab: VisaApplicationTabs.VisaStatus,
      children: <VisaStatus data={visaApplication} />,
    },
  ];

  console.log('visaApplication :', visaApplication);
  return (
    <Spin spinning={spinning}>
      <PageContainer
        content={<VisaApplicationBrief visaApplication={visaApplication} />}
        title={visaApplication?.visaInformation?.visaInfoObject?.name}
        tabList={tabsList}
        tabActiveKey={tabActiveKey}
        onTabChange={setTabActiveKey}
        extra={
          applicationNo &&
          visaApplication?.currentStatus !== ApplicationStatus.SUBMITTED ? (
            <SubmitVisaApplication
              applicationNo={applicationNo}
              onSuccess={fetchVisaApplicationInfo}
            />
          ) : null
        }
      ></PageContainer>
    </Spin>
  );
};

export default VisaApplication;
