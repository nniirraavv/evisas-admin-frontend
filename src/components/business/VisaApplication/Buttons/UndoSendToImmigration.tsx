// import useVisaApplicationStatusActions from '@/hooks/business/useVisaApplicationStatusActions';
// import { undoSendToImmigration } from '@/services/visaApplication/VisaApplicationController';
// import { ISendToExchangeRequestBody } from '@/types';
import { FC } from 'react';
interface Props {
  applicationNo?: string;
  currentStatus?: string;
}
const UndoSendToImmigration: FC<Props> = (
  {
    // applicationNo, currentStatus
  },
) => {
  // const { loading, run } = useVisaApplicationStatusActions(
  //   undoSendToImmigration,
  //   'Undo send to immigration executed successfully!',
  //   'Failed to execute undo send to immigration!',
  // );

  // const handleUndoSendToImmigration = async (data: UndoSendToImmigrationForm) =>
  //   run(data, applicationNo);

  return null;
  // TODO: enable when API is ready for the same
  // return applicationNo && currentStatus === ApplicationStatus.SENT_TO_IMM ? (
  //   <GenericModalForm<UndoSendToImmigrationForm>
  //     buttonTitle="Undo"
  //     buttonTooltipTitle="Undo Send To Immigration"
  //     buttonType="primary"
  //     buttonTooltipPlacement="bottomRight"
  //     buttonLoading={loading}
  //     onFinish={handleUndoSendToImmigration}
  //   >
  //     <ProFormTextArea
  //       name="remark"
  //       label="Remark"
  //       placeholder="please enter your remark here"
  //     />
  //   </GenericModalForm>
  // ) : null;
};

export default UndoSendToImmigration;
