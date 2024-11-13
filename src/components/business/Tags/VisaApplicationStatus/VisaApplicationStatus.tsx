import {
  getVisaApplicationStatusTagColor,
  removeUnderscores,
} from '@/lib/visaUtils';
import { Tag } from 'antd';
import { FC } from 'react';

interface Props {
  value: string;
}
const VisaApplicationStatus: FC<Props> = ({ value }) => {
  const statusColor = getVisaApplicationStatusTagColor(value);
  return (
    <Tag
      color={statusColor}
      style={{ height: 'fit-content', width: 'fit-content' }}
    >
      {removeUnderscores(value, ' ')}
    </Tag>
  );
};

export default VisaApplicationStatus;
