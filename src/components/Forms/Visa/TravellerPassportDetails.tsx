import { AllowedNationalityOptions, TravellerGenderOptions } from '@/constants';
import {
  isDateValid_Validator,
  mapValueToDayjsDate,
  normalizeToServerDate,
} from '@/lib/dateUtils';
import {
  TravellerMaritalStatus,
  TravellerOccupation,
  TravellerTitle,
} from '@/types';
import {
  ProFormDatePicker,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-components';
import { Col, Row, Select, Typography } from 'antd';
import { IN } from 'country-flag-icons/react/1x1';
import dayjs from 'dayjs';
import CustomDivider from '../../Layout/CustomDivider';
import CountryOriginFormSelect from '../CountryOriginSelect';

const { Text } = Typography;
const { Option } = Select;

const TravellerPassportDetails = () => {
  return (
    <>
      <Text strong>Personal Information</Text>
      <CustomDivider />
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <ProFormSelect
            name="title"
            label="Title"
            placeholder={''}
            options={Object.values(TravellerTitle)}
            rules={[
              {
                required: true,
                message: 'Please select title',
              },
            ]}
          />
        </Col>
        <Col span={8}>
          <ProFormText
            name="givenName"
            label="First Name"
            placeholder={''}
            rules={[
              {
                required: true,
                message: 'Please enter first name',
              },
            ]}
          />
        </Col>
        <Col span={8}>
          <ProFormText
            name="surName"
            label="Last Name"
            placeholder={''}
            rules={[
              {
                required: true,
                message: 'Please enter last name',
              },
            ]}
          />
        </Col>
        <Col span={8}>
          <ProFormDatePicker
            name="dateOfBirth"
            label="Date Of Birth"
            placeholder={''}
            fieldProps={{
              maxDate: dayjs(new Date()),
              style: { width: '100%' },
            }}
            formItemProps={{
              getValueProps: mapValueToDayjsDate,
              normalize: normalizeToServerDate,
            }}
            rules={[
              {
                required: true,
                message: 'Please select date of birth',
              },
              {
                validator: isDateValid_Validator,
              },
            ]}
          />
        </Col>
        <Col span={8}>
          <ProFormSelect
            name="gender"
            label="Gender"
            placeholder={''}
            options={TravellerGenderOptions}
            rules={[
              {
                required: true,
                message: 'Please enter gender',
              },
            ]}
          />
        </Col>
        <Col span={8}>
          <ProFormSelect
            name="maritalStatus"
            label="Marital Status"
            placeholder={''}
            options={Object.values(TravellerMaritalStatus)}
            rules={[
              {
                required: true,
                message: 'Please select a marital status',
              },
            ]}
          />
        </Col>
        <Col span={8}>
          <ProFormText
            name="spouseName"
            label="Name Of Spouse"
            placeholder={''}
          />
        </Col>
        <Col span={8}>
          <ProFormSelect
            name="occupation"
            label="Occupation"
            placeholder={''}
            options={Object.values(TravellerOccupation)}
            rules={[
              {
                required: true,
                message: 'Please select occupation',
              },
            ]}
          />
        </Col>
      </Row>

      <Text strong>Contact Information</Text>
      <CustomDivider />
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <ProFormText
            name="mobileNo"
            label="Mobile Number"
            addonWarpStyle={{ flexWrap: 'nowrap' }}
            fieldProps={{ style: { width: '100%' } }}
            addonBefore={
              <Select
                style={{ width: 54, marginRight: -8 }}
                defaultValue={'+91'}
              >
                <Option value={'+91'}>
                  <IN />
                </Option>
              </Select>
            }
            placeholder={''}
            rules={[
              {
                required: true,
                message: 'Please enter mobile',
              },
              {
                pattern: /^[789]\d{9}$/,
                message: 'Please enter a valid mobile number',
              },
            ]}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name="email"
            label="Email"
            placeholder={''}
            rules={[
              {
                required: true,
                message: 'Please enter email',
              },
              {
                type: 'email',
                message: 'Please enter a valid email',
              },
            ]}
          />
        </Col>
        {/* <Col span={24}>
          <ProFormText
            name="line1"
            label="Full Address"
            placeholder={''}
            rules={[
              {
                required: true,
                message: 'Please enter full address',
              },
            ]}
          />
        </Col> */}
        {/* <Col span={8}>
          <CountryOriginFormSelect />
        </Col> */}
        {/* <Col span={8}>
          <ProFormSelect
            name="state"
            label="State"
            placeholder={''}
            showSearch
            options={IndianStates}
            rules={[
              {
                required: true,
                message: 'Please select state',
              },
            ]}
          />
        </Col> */}
        <Col span={8}>
          <ProFormText
            name="placeOfBirth"
            label="Place Of Birth"
            placeholder={''}
            rules={[
              {
                required: true,
                message: 'Please enter your birth city name',
              },
            ]}
          />
        </Col>
        {/* <Col span={8}>
          <ProFormText
            name="postalCode"
            label="Postal Code"
            placeholder={''}
            rules={[
              {
                required: true,
                message: 'Please enter postal code',
              },
            ]}
          />
        </Col> */}
      </Row>

      <Text strong>Passport Details</Text>
      <CustomDivider />
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <ProFormSelect
            mode="single"
            name="nationality"
            label="Nationality"
            placeholder={''}
            options={AllowedNationalityOptions}
            rules={[
              {
                required: true,
                message: 'Please select nationality',
              },
            ]}
          />
        </Col>
        <Col span={8}>
          <CountryOriginFormSelect
            name="passportIssuingCountry"
            label="Passport Issue Country"
            required={false}
          />
        </Col>
        <Col span={8}>
          <ProFormText
            name="passportIssuingPlace"
            label="Passport Issue Place"
            placeholder={''}
          />
        </Col>
        <Col span={8}>
          <ProFormText
            name="fatherName"
            label="Name Of Father"
            placeholder={''}
            rules={[
              {
                required: true,
                message: 'Please enter name of father',
              },
            ]}
          />
        </Col>
        <Col span={8}>
          <ProFormText
            name="motherName"
            label="Name Of Mother"
            placeholder={''}
            rules={[
              {
                required: true,
                message: 'Please enter name of mother',
              },
            ]}
          />
        </Col>
        <Col span={8}>
          <ProFormText
            name="passportNumber"
            label="Passport Number"
            placeholder={''}
            rules={[
              {
                required: true,
                message: 'Please enter passport number',
              },
            ]}
          />
        </Col>
        <Col span={8}>
          <ProFormDatePicker
            name="issuedDate"
            label="Passport Issue Date"
            placeholder={''}
            fieldProps={{
              maxDate: dayjs(new Date()),
              style: { width: '100%' },
            }}
            formItemProps={{
              getValueProps: mapValueToDayjsDate,
              normalize: normalizeToServerDate,
            }}
            rules={[
              {
                required: true,
                message: 'Please select passport issue date',
              },
              {
                validator: isDateValid_Validator,
              },
            ]}
          />
        </Col>
        <Col span={8}>
          <ProFormDatePicker
            name="dateOfExpiry"
            label="Passport Expiry Date"
            placeholder={''}
            disabled
            fieldProps={{
              style: { width: '100%' },
            }}
            formItemProps={{
              getValueProps: mapValueToDayjsDate,
              normalize: normalizeToServerDate,
            }}
            rules={[
              {
                required: true,
                message: 'Please select passport expiry date',
              },
              {
                validator: isDateValid_Validator,
              },
              // TODO: uncomment when demo is completed
              // {
              //   validator: passportExpiry_Validator,
              // },
            ]}
          />
        </Col>
        <Col span={8}>
          <ProFormText
            name="oldPassportNumber"
            label="Old Passport Number"
            placeholder={''}
          />
        </Col>
        <Col span={8}>
          <ProFormSwitch
            name="emigrationCheckRequired"
            label="Emigration Check Required"
          />
        </Col>
      </Row>
    </>
  );
};

export default TravellerPassportDetails;
