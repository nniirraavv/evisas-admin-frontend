import { Col, Input, Row } from 'antd';
import { OTPRef } from 'antd/es/input/OTP';
import { FC, useEffect, useRef } from 'react';

export interface IOtp {
  otp: string;
}
interface Props {
  onFinish?: ((formData: IOtp) => Promise<boolean | void> | void) | undefined;
}

const OTPForm: FC<Props> = ({ onFinish }) => {
  const inputRef = useRef<OTPRef>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <Row justify={'center'} className="mt-6">
      <Col>
        <Input.OTP
          ref={inputRef}
          size="large"
          onChange={(value) => onFinish?.({ otp: value })}
        />
      </Col>
    </Row>
  );
};

export default OTPForm;
