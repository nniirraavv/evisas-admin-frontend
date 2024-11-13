import { Visa } from '@/services/visa/typings';
import { Card } from 'antd';
import { FC } from 'react';
import VisaDetailInfo from '../VisaTypeInfo/VisaDetailInfo';

interface Props {
  data?: Visa;
}
const VisaSummary: FC<Props> = ({ data }) => {
  return data ? (
    <Card>
      <VisaDetailInfo data={data} />
    </Card>
  ) : null;
};

export default VisaSummary;
