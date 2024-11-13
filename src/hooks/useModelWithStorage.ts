import appStorage from '@/lib/storageUtils';
import { useState } from 'react';

const useModelWithStorage = <T>(key: string) => {
  const { getItem, setItem, unSetItem } = appStorage(key);
  const [data, setDataLocal] = useState<T | null>(() => {
    return getItem();
  });

  const setData = (userDetails: T) => {
    setItem(userDetails);
    setDataLocal(userDetails);
  };
  const unSetData = () => {
    unSetItem();
    setDataLocal(null);
  };

  return {
    data,
    setData,
    unSetData,
  };
};

export default useModelWithStorage;
