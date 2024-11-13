import { VisaFee } from '@/services/visa/typings';
import { List, Typography } from 'antd';
import React, { useMemo } from 'react';

const { Text } = Typography;

interface Props {
  visaFee: VisaFee[];
}

const VisaPriceBreakdown: React.FC<Props> = ({ visaFee }) => {
  const mappedData = useMemo(() => {
    return visaFee?.map((f) => ({ label: f.label, value: f.amount }));
  }, [visaFee]);

  return (
    <List
      size="small"
      split={false}
      dataSource={mappedData}
      renderItem={(item) => (
        <List.Item style={{ padding: '2px 8px' }}>
          <div>{item.label}</div>
          <Text strong>{item.value}</Text>
        </List.Item>
      )}
    />
  );
};

export default VisaPriceBreakdown;
