import GenericModalForm from '@/components/Forms/GenericModalForm';
import { ResponseStatus } from '@/constants';
import useVisaApplicationStatusActions from '@/hooks/business/useVisaApplicationStatusActions';
import { getExchangePartners } from '@/services/exchangePartners/ExchangePartnerController';
import { sendToExchange } from '@/services/visaApplication/VisaApplicationController';
import { ApplicationStatus, ISendToExchangeRequestBody } from '@/types';
import { ProFormSelect, ProFormTextArea } from '@ant-design/pro-components';
import { FC } from 'react';
import ApplicationStatusButtonTitle from './Traveller/ApplicationStatusButtonTitle';
interface Props {
  applicationNo?: string;
  currentStatus?: string;
}
const SendToExchange: FC<Props> = ({ applicationNo, currentStatus }) => {
  const { loading, run } = useVisaApplicationStatusActions(
    sendToExchange,
    'Visa application sent to exchange successfully!',
    'Failed to send application to exchange!',
  );

  const handleSendToExchange = async (data: ISendToExchangeRequestBody) => {
    if (!data?.exchangePartnerId) return false;
    return run(data, applicationNo);
  };

  return applicationNo && currentStatus === ApplicationStatus.VERIFIED ? (
    <GenericModalForm<ISendToExchangeRequestBody>
      buttonTooltipTitle={'Send To Exchange'}
      buttonTitle={
        <ApplicationStatusButtonTitle
          applicationStatus={ApplicationStatus.SENT_TO_EXCHANGE}
        />
      }
      buttonType="primary"
      buttonTooltipPlacement="bottomRight"
      buttonLoading={loading}
      onFinish={handleSendToExchange}
    >
      <ProFormSelect
        request={async (params) => {
          const response = await getExchangePartners();
          console.log('Response data : ', response, params);
          if (response?.status === ResponseStatus.ok) {
            return response?.page?.items?.map((i) => ({
              label: i.title,
              value: i.id,
            }));
          }
          return [];
        }}
        name="exchangePartnerId"
        label="Exchange Partner"
      />
      <ProFormTextArea
        name="remark"
        label="Remark"
        placeholder="please enter your remark here"
      />
    </GenericModalForm>
  ) : null;
};

export default SendToExchange;
