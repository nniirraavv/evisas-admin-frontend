import GenericModalForm from '@/components/Forms/GenericModalForm';
import useVisaApplicationTravellerStatusActions from '@/hooks/business/useVisaApplicationTravellerStatusActions';
import { markAsActionRequiredForApplicant } from '@/services/visaApplication/VisaApplicantController';
import { ApplicationStatus, IRemarkRequestBody } from '@/types';
import { ProFormTextArea } from '@ant-design/pro-components';
import { FC } from 'react';
import ApplicationStatusButtonTitle from './ApplicationStatusButtonTitle';
import { VisaTravellerStatusActionProps } from './types';

const MarkAsActionRequired: FC<VisaTravellerStatusActionProps> = ({
  applicationNo,
  applicantNo,
  currentStatus,
  buttonType,
  buttonBlock,
}) => {
  const { loading, run } = useVisaApplicationTravellerStatusActions(
    markAsActionRequiredForApplicant,
    'Visa application traveller marked as action required successfully!',
    'Failed to mark traveller as action required!',
  );

  const handleMarkAsActionRequired = async (data: IRemarkRequestBody) =>
    run(data, applicationNo, applicantNo);

  return applicationNo && currentStatus === ApplicationStatus.SUBMITTED ? (
    <GenericModalForm<IRemarkRequestBody>
      buttonTitle={
        <ApplicationStatusButtonTitle
          applicationStatus={ApplicationStatus.ACTION_REQUIRED}
        />
      }
      buttonType={buttonType || 'primary'}
      buttonBlock={buttonBlock}
      buttonTooltipPlacement="bottomRight"
      buttonLoading={loading}
      onFinish={handleMarkAsActionRequired}
    >
      <ProFormTextArea
        name="remark"
        label="Remark"
        placeholder="please enter your remark here"
      />
    </GenericModalForm>
  ) : null;
};

export default MarkAsActionRequired;
