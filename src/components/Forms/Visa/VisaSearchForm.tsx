import services from '@/services/countries';
import { VisaTypes } from '@/types';
import { ProForm, ProFormSelect } from '@ant-design/pro-components';
import { Card } from 'antd';
import { FormLayout } from 'antd/es/form/Form';
import { Store } from 'antd/es/form/interface';
import clsx from 'clsx';
import React from 'react';

const { fetchCountries } = services.CountriesController;

interface IVisaForm {
  layout: FormLayout;
  className?: string;
  submitButtonBlock?: boolean;
  onFinish?: (formData: Record<string, any>) => Promise<boolean | void> | void;
  initialValues?: Store;
}

const VisaForm: React.FC<IVisaForm> = ({
  layout,
  className,
  submitButtonBlock,
  onFinish,
  initialValues,
}) => {
  return (
    <Card
      className={clsx(className)}
      // style={{ background: 'rgba(3, 4, 5, 0.5) none repeat scroll 0 0' }}
    >
      <ProForm
        submitter={{
          searchConfig: {
            submitText: 'Search',
          },
          resetButtonProps: false,
          submitButtonProps: {
            block: submitButtonBlock ?? true,
            className: submitButtonBlock !== undefined ? '' : 'mt-4',
          },
        }}
        initialValues={initialValues}
        grid={layout === 'inline' ? true : false}
        rowProps={{ style: { width: '80%' }, gutter: [8, 8] }}
        colProps={{ xs: 24, sm: 12, md: 10, lg: 8 }}
        labelCol={{ md: 10, lg: 9 }}
        layout={layout}
        onFinish={onFinish}
      >
        <ProFormSelect.SearchSelect
          mode="single"
          debounceTime={300}
          request={async ({ keyWords }) => {
            return fetchCountries(keyWords);
          }}
          name="originCountryCode"
          label="Origin"
          tooltip="Starting point of your journey"
          placeholder="Type to search"
          rules={[
            {
              required: true,
              message: 'Please enter a starting point of your journey',
            },
          ]}
        />
        <ProFormSelect.SearchSelect
          mode="single"
          debounceTime={300}
          request={async ({ keyWords }) => {
            return fetchCountries(keyWords);
          }}
          name="destinationCountryCode"
          label="Destination"
          tooltip="Destination of your journey"
          placeholder="Type to search"
          rules={[
            {
              required: true,
              message: 'Please enter the destination of your journey',
            },
          ]}
        />
        <ProFormSelect
          mode="single"
          name="visaType"
          label="Visa Type"
          options={Object.values(VisaTypes)}
          rules={[
            {
              required: true,
              message: 'Please select a visa type',
            },
          ]}
        />
      </ProForm>
    </Card>
  );
};

export default VisaForm;
