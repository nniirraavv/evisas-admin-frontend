import GenericModalForm from '@/components/Forms/GenericModalForm';
import useVisaApplicationTravellerStatusActions from '@/hooks/business/useVisaApplicationTravellerStatusActions';
import { verifyApplicant } from '@/services/visaApplication/VisaApplicantController';
import { ApplicationStatus, IRemarkRequestBody } from '@/types';
import { ProFormTextArea } from '@ant-design/pro-components';
import { FC } from 'react';
import ApplicationStatusButtonTitle from './ApplicationStatusButtonTitle';
import { VisaTravellerStatusActionProps } from './types';

const MarkAsVerified: FC<VisaTravellerStatusActionProps> = ({
  applicationNo,
  applicantNo,
  currentStatus,
  buttonBlock,
  buttonType,
}) => {
  const { loading, run } = useVisaApplicationTravellerStatusActions(
    verifyApplicant,
    'Visa application traveller verified successfully!',
    'Failed to mark traveller as verified!',
  );

  const handleMarkAsVerified = async (data: IRemarkRequestBody) =>
    run(data, applicationNo, applicantNo);

  return applicationNo && currentStatus === ApplicationStatus.SUBMITTED ? (
    <GenericModalForm<IRemarkRequestBody>
      buttonTitle={
        <ApplicationStatusButtonTitle
          applicationStatus={ApplicationStatus.VERIFIED}
        />
      }
      buttonType={buttonType || 'primary'}
      buttonBlock={buttonBlock}
      buttonTooltipPlacement="bottomRight"
      buttonLoading={loading}
      onFinish={handleMarkAsVerified}
    >
      <ProFormTextArea
        name="remark"
        label="Remark"
        placeholder="please enter your remark here"
      />
    </GenericModalForm>
  ) : null;
};

export default MarkAsVerified;
