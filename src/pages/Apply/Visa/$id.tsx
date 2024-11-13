import MakePaymentBy from '@/components/business/VisaApplication/MakePaymentBy';
import TravellerInfo from '@/components/business/VisaApplication/TravellerInfo';
import { mapAntFileToServerFile } from '@/lib/uploadUtils';
import { getVisaInfo } from '@/services/visa/VisaController';
import { ICreateVisaApplicationResponse } from '@/services/visaApplication/typings';
import { createVisaApplication } from '@/services/visaApplication/VisaApplicationController';
import { VisaStepsSlug } from '@/types';
import {
  FooterToolbar,
  PageContainer,
  ProForm,
  ProFormInstance,
} from '@ant-design/pro-components';
import { Outlet, useModel, useNavigate, useParams } from '@umijs/max';
import { useMount, useUnmount } from 'ahooks';
import { Button, Col, Row, Steps } from 'antd';
import dayjs from 'dayjs';
import qs from 'qs';
import { useMemo, useRef } from 'react';

export enum FormSteps {
  One = 0,
  Two = 1,
  Three = 2,
}
const CreateVisaApplication = () => {
  const { step, id: visaId, applicationNo } = useParams();
  const navigate = useNavigate();
  const { data, setData, unSetData } = useModel('visa');
  const { data: visaApplication, setData: setVisaApplicationData } =
    useModel('visaApplication');
  const formRef = useRef<ProFormInstance<Record<string, any>>>();

  const fetchVisaInfo = async () => {
    if (!visaId) return;
    const response = await getVisaInfo(visaId);
    const origin = response?.item?.visaInfoObject?.origin?.[0];
    const destination = response?.item?.visaInfoObject?.destination?.[0];
    if (response) {
      setData({
        sourceCountry: origin?.countryCode,
        destinationCountry: destination?.countryCode,
        visaInfo: {
          visaInfoObject: response?.item?.visaInfoObject,
          visaInfoProvider: response?.item?.visaInfoProvider,
        },
      });
    }
  };

  useMount(() => {
    if (visaId && visaId !== data?.visaInfo?.visaInfoObject?.id) {
      // Fetch visa info
      fetchVisaInfo();
    }
  });
  useUnmount(() => unSetData());

  const stepInt = useMemo(() => (step ? parseInt(step) : undefined), [step]);

  const handleBack = () => {
    let queryString;
    switch (stepInt) {
      case 1:
      case 0:
        queryString = qs.stringify({
          visaType: data?.visaInfo?.visaInfoObject?.visaType,
          originCountryCode: data?.sourceCountry,
          destinationCountryCode: data?.destinationCountry,
        });
        navigate(`/apply/visa?${queryString}`, {
          replace: true,
        });
        break;
      case 2:
        navigate(
          `/apply/visa/${visaId}/${stepInt - 1}/${applicationNo}/${
            VisaStepsSlug.AddDocuments
          }`,
          {
            replace: true,
          },
        );
        break;

      default:
        break;
    }
  };

  const handleCpaySuccess = () => navigate('/visa/applications');
  const handleOnSubmit = () => navigate('/visa/applications');

  const handleCpayError = (error: any) => {
    console.log('error : ', error);
  };

  return (
    <PageContainer>
      <Row className="w-full lg:w-full xl:w-11/12 m-auto">
        <Col span={6}>
          <Steps
            direction="vertical"
            current={stepInt}
            items={[
              {
                title: 'Travel Details',
                description: 'Add dates & traveller details',
              },
              {
                title: 'Add Documents',
                description: 'Provide all required documents',
              },
              {
                title: 'Payment summary',
                description: 'View travel & payment summary',
              },
            ]}
          />
        </Col>
        <Col span={18}>
          <TravellerInfo visaInfo={data?.visaInfo?.visaInfoObject} />
        </Col>
      </Row>
      <ProForm
        scrollToFirstError
        formRef={formRef}
        initialValues={{
          travellers: [{}],
        }}
        onFinish={async (values) => {
          let payload: any;
          let applicationResponse: ICreateVisaApplicationResponse;
          let _applicationNo: string;

          if (data) {
            switch (stepInt) {
              case 0:
                if (applicationNo) return;

                payload = {
                  ...data,
                  consulate: values?.consulate,
                  travellers: values?.travellers?.map((t: any) => {
                    const result = {
                      ...t,
                    };
                    if (result?.passportFrontPage?.length) {
                      result['passportFrontPage'] = mapAntFileToServerFile(
                        result?.passportFrontPage[0],
                      );
                    }
                    if (result?.passportBackPage?.length) {
                      result['passportBackPage'] = mapAntFileToServerFile(
                        result?.passportBackPage[0],
                      );
                    }
                    if (result?.photo?.length) {
                      result['photo'] = mapAntFileToServerFile(
                        result?.photo[0],
                      );
                    }
                    return result;
                  }),
                  travelDate: dayjs(new Date())
                    .add(4, 'day')
                    .format('YYYY-MM-DD'),
                  returnDate: dayjs(new Date())
                    .add(15, 'day')
                    .format('YYYY-MM-DD'),
                };
                // create new application
                applicationResponse = await createVisaApplication(payload);
                _applicationNo = applicationResponse?.item?.applicationNo;
                setVisaApplicationData(applicationResponse.item);
                navigate(
                  `/apply/visa/${visaId}/${stepInt + 1}/${_applicationNo}/${
                    VisaStepsSlug.AddDocuments
                  }`,
                  {
                    replace: true,
                  },
                );
                break;
              case 1:
                navigate(
                  `/apply/visa/${visaId}/${stepInt + 1}/${
                    visaApplication?.applicationNo
                  }/${VisaStepsSlug.PaymentSummary}`,
                  {
                    replace: true,
                  },
                );
                break;

              default:
                break;
            }
          }
        }}
        submitter={{
          render: (props) => (
            <FooterToolbar>
              <Button htmlType="button" onClick={handleBack}>
                Back
              </Button>
              {stepInt === 2 ? (
                <MakePaymentBy
                  type="primary"
                  disabled={!applicationNo || !!visaApplication?.paymentId}
                  applicationNo={applicationNo}
                  onCpaySuccess={handleCpaySuccess}
                  onCpayError={handleCpayError}
                  onSubmit={handleOnSubmit}
                />
              ) : (
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={stepInt === 0 && !!applicationNo}
                  onClick={() => props.submit()}
                >
                  {stepInt === 1 ? 'Continue' : 'Save'}
                </Button>
              )}
            </FooterToolbar>
          ),
        }}
        className="w-full lg:w-full xl:w-11/12 m-auto mt-10"
      >
        <Outlet />
      </ProForm>
    </PageContainer>
  );
};

export default CreateVisaApplication;
