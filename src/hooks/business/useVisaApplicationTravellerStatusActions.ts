import { ResponseStatus } from '@/constants';
import { IResponseStatus } from '@/services/visaApplication/typings';
import { getVisaApplication } from '@/services/visaApplication/VisaApplicationController';
import { useModel } from '@umijs/max';
import { useRequest } from 'ahooks';
import { message } from 'antd';

type ApplicationStatusAction<RequestBody> = (
  applicationNo: string,
  applicantNo: string,
  data: RequestBody,
  options?: {
    [key: string]: any;
  },
) => Promise<IResponseStatus>;

const useVisaApplicationTravellerStatusActions = <RequestBody>(
  action: ApplicationStatusAction<RequestBody>,
  successText?: string,
  errorText?: string,
) => {
  const { setData: setVisaApplication } = useModel('visaApplication');
  const { loading, runAsync } = useRequest(action, {
    manual: true,
  });

  const fetchAndUpdateVisaApplicationInfo = async (applicationNo: string) => {
    if (!applicationNo) return;
    const response = await getVisaApplication(applicationNo);
    if (response) setVisaApplication(response.item);
  };

  const run = async (
    data: RequestBody,
    applicationNo?: string,
    applicantNo?: string,
  ) => {
    try {
      if (!applicationNo || !applicantNo) return false;
      const response = await runAsync(applicationNo, applicantNo, data);
      if (response?.status === ResponseStatus.ok) {
        message.success(successText);
        fetchAndUpdateVisaApplicationInfo(applicationNo);
        return true;
      }
    } catch (error) {
      message.error(errorText);
      return false;
    }
  };

  return {
    loading,
    run,
  };
};

export default useVisaApplicationTravellerStatusActions;