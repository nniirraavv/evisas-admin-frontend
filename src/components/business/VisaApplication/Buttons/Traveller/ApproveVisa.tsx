import GenericModalForm from '@/components/Forms/GenericModalForm';
import TravellerFileUploaderButton from '@/components/Forms/Visa/Upload/FileUploaderButton';
import useVisaApplicationTravellerStatusActions from '@/hooks/business/useVisaApplicationTravellerStatusActions';
import { mapAntFileToServerFile } from '@/lib/uploadUtils';
import { IApproveVisaForTraveller } from '@/services/visaApplication/typings';
import { approveVisaForApplicant } from '@/services/visaApplication/VisaApplicantController';
import { ApplicationStatus } from '@/types';
import { ProFormTextArea } from '@ant-design/pro-components';
import { FC } from 'react';
import ApplicationStatusButtonTitle from './ApplicationStatusButtonTitle';
import { VisaTravellerStatusActionProps } from './types';

const ApproveVisa: FC<VisaTravellerStatusActionProps> = ({
  applicationNo,
  applicantNo,
  currentStatus,
  buttonType,
  buttonBlock,
}) => {
  const { loading, run } = useVisaApplicationTravellerStatusActions(
    approveVisaForApplicant,
    'Visa application approved successfully!',
    'Failed to approve visa application!',
  );

  const handleApproveVisaApplication = async (
    data: IApproveVisaForTraveller,
  ) => {
    if (!data?.remark) return;
    const payload = {
      ...data,
      visaDocuments: data?.visaDocuments?.map((file) => {
        return {
          ...(mapAntFileToServerFile(file) || {}),
          fileType: 'visa-approval-document', // Hard-coded, must be handled on the BE
        };
      }),
    };

    console.log('data : ', payload);
    return run(payload, applicationNo, applicantNo);
  };

  return applicationNo &&
    applicantNo &&
    (currentStatus === ApplicationStatus.VERIFIED ||
      currentStatus === ApplicationStatus.SENT_TO_IMM ||
      currentStatus === ApplicationStatus.SENT_TO_EXCHANGE) ? (
    <GenericModalForm<IApproveVisaForTraveller>
      buttonTitle={
        <ApplicationStatusButtonTitle
          applicationStatus={ApplicationStatus.APPROVED}
        />
      }
      buttonType={buttonType || 'primary'}
      buttonBlock={buttonBlock}
      buttonTooltipPlacement="bottomRight"
      buttonLoading={loading}
      onFinish={handleApproveVisaApplication}
    >
      <ProFormTextArea
        name="remark"
        label="Remark"
        placeholder="please enter your remark here"
      />

      <TravellerFileUploaderButton
        applicationNo={applicationNo}
        applicantNo={applicantNo}
        document={{
          fieldName: 'file',
          accept: '.png,.jpg,.jpeg',
          required: true,
        }}
      />
    </GenericModalForm>
  ) : null;
};
export default ApproveVisa;
