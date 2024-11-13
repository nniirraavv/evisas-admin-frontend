import { ResponseStatus } from '@/constants';
import { submitVisaApplication } from '@/services/visaApplication/VisaApplicationController';
import { Button, message } from 'antd';
import { FC, useState } from 'react';

interface Props {
  applicationNo: string;
  onSuccess?: (applicationNo: string) => void;
}

const SubmitVisaApplication: FC<Props> = ({ applicationNo, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleApplicationSubmit = async () => {
    if (!applicationNo) return;
    try {
      setLoading(true);
      const response = await submitVisaApplication(applicationNo);
      if (response.status === ResponseStatus.ok) {
        message.success('Application submitted successfully');
        onSuccess?.(applicationNo);
      }
    } catch (error) {
      console.log('Error on visa application submit: ', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      type="primary"
      loading={loading}
      disabled={!applicationNo}
      onClick={handleApplicationSubmit}
    >
      Submit Application
    </Button>
  );
};

export default SubmitVisaApplication;
