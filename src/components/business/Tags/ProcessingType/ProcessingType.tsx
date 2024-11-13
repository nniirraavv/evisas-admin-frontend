import { getVisaProcessingTypeTagColor } from '@/lib/visaUtils';
import { Tag } from 'antd';
import React, { useMemo } from 'react';

interface Props {
  value?: string;
}

const ProcessingType: React.FC<Props> = ({ value }) => {
  const processingTypeColor = useMemo(
    () => getVisaProcessingTypeTagColor(value),
    [value],
  );
  return (
    <Tag color={processingTypeColor} style={{ height: 'fit-content' }}>
      {value?.toUpperCase()}
    </Tag>
  );
};

export default ProcessingType;
