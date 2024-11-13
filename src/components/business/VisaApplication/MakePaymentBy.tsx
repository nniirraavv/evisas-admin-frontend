import { CPAY_SCRIPT_URL, ResponseStatus } from '@/constants';
import {
  CpayOrder,
  CreateCpayOrderResponse,
} from '@/services/visaApplication/typings';
import {
  createOrderCpay,
  submitVisaApplication,
  verifyBookingCpay,
} from '@/services/visaApplication/VisaApplicationController';
import { ApplicationPaymentPlatform, CpayBookingStatus } from '@/types';
import { ModalForm, ProFormSelect } from '@ant-design/pro-components';
import { useExternal } from 'ahooks';
import { Button, ButtonProps, Form, message } from 'antd';
import { FC, useRef, useState } from 'react';

interface Props extends Omit<ButtonProps, 'htmlType' | 'onClick'> {
  applicationNo?: string;
  onSubmit?: () => void;
  onCpaySuccess?: (data: any) => void;
  onCpayError?: (data: any) => void;
  onPayBySuccess?: (data: any) => void;
  onPayByError?: (data: any) => void;
}

interface IPaymentMethodFields {
  paymentMethod: string;
}

const MakePaymentBy: FC<Props> = ({
  applicationNo,
  onSubmit,
  onCpaySuccess,
  onCpayError,
  // onPayBySuccess,
  // onPayByError,
  ...buttonProps
}) => {
  const bookingVerificationRef = useRef(false);
  const [spinning, setSpinning] = useState(false);
  // Load the cpay script https://front-dev.cpay.ws/checkout/checkout.js
  const status = useExternal(CPAY_SCRIPT_URL, {
    js: {
      async: true,
    },
  });

  const [form] = Form.useForm<IPaymentMethodFields>();

  const paymentMethodOptions = Object.values(ApplicationPaymentPlatform)?.map(
    (m) => ({
      label: m,
      value: m,
      disabled:
        (m === ApplicationPaymentPlatform.CPAY && status !== 'ready') ||
        m === ApplicationPaymentPlatform.PAYBY,
    }),
  );

  // TODO: remove when testing is done
  const handleApplicationSubmit = async () => {
    if (!applicationNo) return;
    try {
      setSpinning(true);
      const response = await submitVisaApplication(applicationNo);
      if (response.status === ResponseStatus.ok) {
        message.success('Application submitted successfully');
        onSubmit?.();
      }
    } catch (error) {
      console.log('Error on visa application submit: ', error);
    } finally {
      setSpinning(false);
    }
  };

  const handlePaymentByCpay = (cpayOrder: CpayOrder, applicationNo: string) => {
    let options: any = {
      merchantId: cpayOrder?.cpayOrderOption?.merchantId,
      merchantToken: cpayOrder?.cpayOrderOption?.merchantTokenId,
      orderId: cpayOrder?.cpayOrderOption?.orderId,
    };

    options.handler = function (response: any) {
      if (response?.booking_status === CpayBookingStatus.BOOKING_SUCCESS) {
        if (bookingVerificationRef.current) return;
        bookingVerificationRef.current = true;
        // Verify booking
        setSpinning(true);
        // TODO: verification api must be called only once
        verifyBookingCpay(applicationNo, {
          bookingReference: response?.booking_reference,
          merchantOrderNo: cpayOrder?.orderNo,
        })
          .then((response) => {
            console.log('Booking verify : ', response);
            // TODO: check if success and then notify parent
            onCpaySuccess?.(response?.item);
          })
          .catch((error) => {
            console.log('Error on booking verification : ', error);
            // Notify parent
            onCpayError?.(error);
          })
          .finally(() => {
            setSpinning(false);
            bookingVerificationRef.current = false;
          });
      }
    };

    // @ts-ignore
    let cpay = new Cpay(options);
    cpay.open();
  };

  const handlePaymentByPayBy = () => {};

  const handleOnFinish = async (values: IPaymentMethodFields) => {
    if (!applicationNo) return;
    try {
      console.log('Payment Method : ', values);
      let response: CreateCpayOrderResponse;
      switch (values?.paymentMethod) {
        case ApplicationPaymentPlatform.CPAY:
          response = await createOrderCpay(applicationNo);
          if (response?.status === ResponseStatus.ok) {
            handlePaymentByCpay(response?.item, applicationNo);
          }
          break;
        case ApplicationPaymentPlatform.PAYBY:
          handlePaymentByPayBy();
          break;
        case ApplicationPaymentPlatform.SUBMIT:
          handleApplicationSubmit(); // TODO: remove when testing is done
          onSubmit?.();
          break;

        default:
          break;
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <>
      <ModalForm<IPaymentMethodFields>
        title="Select A Payment Method"
        form={form}
        autoFocusFirstInput
        modalProps={{
          destroyOnClose: true,
          width: 500,
          okText: 'Go',
          bodyProps: { style: { marginTop: 15 } },
        }}
        trigger={
          <Button {...buttonProps} htmlType="button" loading={spinning}>
            {buttonProps?.title || 'Make Payment'}
          </Button>
        }
        onFinish={handleOnFinish}
      >
        <ProFormSelect
          options={paymentMethodOptions}
          width="sm"
          name="paymentMethod"
        />
      </ModalForm>
    </>
  );
};

export default MakePaymentBy;
