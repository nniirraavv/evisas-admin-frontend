// Create Visa
import useModelWithStorage from '@/hooks/useModelWithStorage';
import { VisaApplication } from '@/services/visaApplication/typings';

const CREATE_VISA_STORAGE_KEY = 'visaApplication';

const useVisaApplication = () => {
  const { data, setData, unSetData } = useModelWithStorage<VisaApplication>(
    CREATE_VISA_STORAGE_KEY,
  );

  return {
    data,
    setData,
    unSetData,
  };
};

export default useVisaApplication;
