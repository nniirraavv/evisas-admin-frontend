// Create Visa
import useModelWithStorage from '@/hooks/useModelWithStorage';
import { VisaApplicationPayments } from '@/services/visaApplication/typings';

const STORAGE_KEY = 'visaApplicationPayments';

const useVisaApplicationPayments = () => {
  const { data, setData, unSetData } =
    useModelWithStorage<VisaApplicationPayments>(STORAGE_KEY);

  return {
    data,
    setData,
    unSetData,
  };
};

export default useVisaApplicationPayments;
