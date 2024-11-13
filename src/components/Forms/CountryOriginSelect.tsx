import { AllowedOriginCountryOptions } from '@/constants';
import { ProFormSelect, ProFormSelectProps } from '@ant-design/pro-components';
import { FC } from 'react';

type Props = ProFormSelectProps;

const CountryOriginFormSelect: FC<Props> = (props) => {
  return (
    <ProFormSelect
      {...props}
      name={props?.name || 'country'}
      label={props?.label || 'Country'}
      placeholder={props?.placeholder || ''}
      options={AllowedOriginCountryOptions}
      rules={
        props.required
          ? [
              {
                required: true,
                message: 'Please select country',
              },
            ]
          : []
      }
    />
  );
};

export default CountryOriginFormSelect;
