import GenericModalForm from '@/components/Forms/GenericModalForm';
import useVisaApplicationTravellerStatusActions from '@/hooks/business/useVisaApplicationTravellerStatusActions';
import { rejectVisaForApplicant } from '@/services/visaApplication/VisaApplicantController';
import { ApplicationStatus, IRemarkRequestBody } from '@/types';
import { ProFormTextArea } from '@ant-design/pro-components';
import { FC } from 'react';
import ApplicationStatusButtonTitle from './ApplicationStatusButtonTitle';
import { VisaTravellerStatusActionProps } from './types';

const RejectVisa: FC<VisaTravellerStatusActionProps> = ({
  applicationNo,
  applicantNo,
  currentStatus,
  buttonBlock,
  buttonType,
}) => {
  const { loading, run } = useVisaApplicationTravellerStatusActions(
    rejectVisaForApplicant,
    'Visa application traveller marked as rejected successfully!',
    'Failed to mark traveller as rejected!',
  );

  const handleMarkAsRejected = async (data: IRemarkRequestBody) =>
    run(data, applicationNo, applicantNo);

  return applicationNo &&
    (currentStatus === ApplicationStatus.VERIFIED ||
      currentStatus === ApplicationStatus.SENT_TO_IMM ||
      currentStatus === ApplicationStatus.SENT_TO_EXCHANGE) ? (
    <GenericModalForm<IRemarkRequestBody>
      buttonTitle={
        <ApplicationStatusButtonTitle
          applicationStatus={ApplicationStatus.REJECTED}
        />
      }
      buttonType={buttonType || 'primary'}
      buttonBlock={buttonBlock}
      buttonTooltipPlacement="bottomRight"
      buttonLoading={loading}
      onFinish={handleMarkAsRejected}
    >
      <ProFormTextArea
        name="remark"
        label="Remark"
        placeholder="please enter your remark here"
      />
    </GenericModalForm>
  ) : null;
};

export default RejectVisa;
