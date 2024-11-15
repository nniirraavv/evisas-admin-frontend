import GenericModalForm from '@/components/Forms/GenericModalForm';
import useVisaApplicationStatusActions from '@/hooks/business/useVisaApplicationStatusActions';
import { sendToImmigration } from '@/services/visaApplication/VisaApplicationController';
import { ApplicationStatus, SendToImmigrationForm } from '@/types';
import { ProFormTextArea } from '@ant-design/pro-components';
import { FC } from 'react';
import ApplicationStatusButtonTitle from './Traveller/ApplicationStatusButtonTitle';
interface Props {
  applicationNo?: string;
  currentStatus?: string;
}
const SendToImmigration: FC<Props> = ({ applicationNo, currentStatus }) => {
  const { loading, run } = useVisaApplicationStatusActions(
    sendToImmigration,
    'Visa application sent to immigration successfully!',
    'Failed to send application to immigration!',
  );

  const handleSendToImmigration = async (data: SendToImmigrationForm) =>
    run(data, applicationNo);

  return currentStatus === ApplicationStatus.VERIFIED ? (
    <GenericModalForm<SendToImmigrationForm>
      buttonTooltipTitle={'Send To Immigration'}
      buttonTitle={
        <ApplicationStatusButtonTitle
          applicationStatus={ApplicationStatus.SENT_TO_IMM}
        />
      }
      buttonType="primary"
      buttonTooltipPlacement="bottomRight"
      buttonLoading={loading}
      onFinish={handleSendToImmigration}
    >
      <ProFormTextArea
        name="remark"
        label="Remark"
        placeholder="please enter your remark here"
      />
    </GenericModalForm>
  ) : null;
};

export default SendToImmigration;
