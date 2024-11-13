// Create Visa
import useModelWithStorage from '@/hooks/useModelWithStorage';
import { VisaSearchInfo } from '@/services/visa/typings';

const CREATE_VISA_STORAGE_KEY = 'visa';

const useVisa = () => {
  const { data, setData, unSetData } = useModelWithStorage<VisaSearchInfo>(
    CREATE_VISA_STORAGE_KEY,
  );

  return {
    data,
    setData,
    unSetData,
  };
};

export default useVisa;
