import { ResponseStatus } from '@/constants';
import {
  VisaApplicationFeeTraveller,
  VisaApplicationPayments,
} from '@/services/visaApplication/typings';
import { getVisaApplicationPayments } from '@/services/visaApplication/VisaApplicationController';
import { ProColumns, ProTable } from '@ant-design/pro-components';
import { useModel, useParams } from '@umijs/max';
import { useMount } from 'ahooks';
import { Flex, Modal, Result, Table, Typography } from 'antd';
import { FC, useState } from 'react';
import MakePaymentBy from './MakePaymentBy';

const { Text } = Typography;

// interface VisaSummaryInfoItem {
//   productName?: string;
//   amountCollected?: boolean;
//   quantity?: number;
//   pricePerUnit?: number;
//   gstPercentage?: string;
//   gstAmount?: number;
//   totalAmount: number;
// }

const customColSpanConfig =
  // @ts-ignore
  (defaultColSpan: number) => () => {
    return { colSpan: defaultColSpan };
  };

const columns: ProColumns<VisaApplicationFeeTraveller>[] = [
  {
    title: 'Traveller No.',
    dataIndex: 'travellerNo',
    colSpan: 2,
    align: 'left',
    onCell: customColSpanConfig(2),
    onHeaderCell: customColSpanConfig(2),
  },
  // {
  //   title: 'Amount Collected',
  //   dataIndex: 'amountCollected',
  //   onCell: customColSpanConfig(1, 1),
  //   onHeaderCell: customColSpanConfig(1, 1),
  //   align: 'end',
  //   render(_, entity) {
  //     return entity.amountCollected ? <CheckSquareFilled /> : '-';
  //   },
  // },
  {
    title: 'Quantity',
    onCell: customColSpanConfig(1),
    onHeaderCell: customColSpanConfig(1),
    align: 'end',
    render() {
      return <Text>1</Text>;
    },
  },
  {
    title: 'Price/Unit',
    dataIndex: 'pricePerUnit',
    align: 'end',
    onCell: () => {
      return { colSpan: 1 };
    },
    render(_, entity) {
      return <Text>{entity.amount}</Text>;
    },
  },
  // {
  //   title: 'Gst',
  //   dataIndex: 'gstPercentage',
  //   onCell: customColSpanConfig(1, 1),
  //   onHeaderCell: customColSpanConfig(1, 1),
  //   align: 'end'
  // },
  // {
  //   title: 'Gst Amount',
  //   dataIndex: 'gstAmount',
  //   onCell: customColSpanConfig(1, 1),
  //   onHeaderCell: customColSpanConfig(1, 1),
  //   align: 'end'
  // },
  {
    title: 'Total Amount',
    dataIndex: 'totalAmount',
    align: 'end',
    onHeaderCell: (_, index) => {
      if (index === 1) {
        return { colSpan: 4 };
      }
      return { colSpan: 3 };
    },
    onCell: (_, index) => {
      if (index === 1) {
        return { colSpan: 4 };
      }
      return { colSpan: 3 };
    },
    render(_, entity) {
      return <Text>{entity.amount}</Text>;
    },
  },
];

// TODO: Remove this mock data array if client does not request for any of the below complexities
// const MockVisaSummaryData: VisaSummaryInfoItem[] = [
// {
//   productName: 'Azerbaijan Single Entry Urgent Tourist E-Visa',
//   amountCollected: false,
//   pricePerUnit: 2518.0,
//   quantity: 1,
//   totalAmount: 2518.0,
// },
// {
//   productName: 'A. Subtotal',
//   totalAmount: 2518.0,
// },
// {
//   productName: 'Supplier Fee',
//   gstPercentage: '18% GST',
//   gstAmount: 15.3,
//   pricePerUnit: 85,
//   quantity: 1,
//   totalAmount: 100.3,
// },
// {
//   productName: 'Total Markup',
//   gstPercentage: '18% GST',
//   gstAmount: 0.0,
//   pricePerUnit: 0.0,
//   quantity: 0,
//   totalAmount: 0.0,
// },
// ];
enum PaymentStatus {
  SUCCESS = 'success',
  ERROR = 'error',
}
interface Props {
  allowPaymentAction?: boolean;
}
const PaymentSummary: FC<Props> = ({ allowPaymentAction }) => {
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>();
  const { applicationNo } = useParams();
  const { setData: setVisaApplication } = useModel('visaApplication');
  const [visaApplicationPayments, setVisaApplicationPayments] =
    useState<VisaApplicationPayments>();

  const fetchVisaApplicationPayments = async () => {
    if (applicationNo) {
      const response = await getVisaApplicationPayments(applicationNo);
      if (response.status === ResponseStatus.ok) {
        setVisaApplicationPayments(response?.item);
        return response?.item?.application;
      }
    }
  };

  useMount(fetchVisaApplicationPayments);

  const handleCpaySuccess = () => {
    setPaymentStatus(PaymentStatus.SUCCESS);
    fetchVisaApplicationPayments();
  };

  const handleCpayError = () => {
    setPaymentStatus(PaymentStatus.ERROR);
  };

  const handleModalClose = () => setPaymentStatus(undefined);
  return (
    <>
      <ProTable<VisaApplicationFeeTraveller>
        search={false}
        rowKey="travellerNo"
        columns={columns}
        pagination={false}
        dataSource={visaApplicationPayments?.calculateFee?.travellers || []}
        toolbar={{
          // actions: [<Button>Add Markup</Button>], //TODO: include if client makes a request
          settings: [],
        }}
        summary={(pageData) => {
          let _amount = 0;

          pageData.forEach(({ amount }) => {
            _amount += amount;
          });

          return (
            <>
              <Table.Summary.Row className="bg-secondary">
                <Table.Summary.Cell index={0} colSpan={4} align="right">
                  <Text strong>Total</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1} colSpan={4} align="right">
                  <Text strong>{_amount}</Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
      {allowPaymentAction ? (
        <Flex justify="end" className="mt-3">
          <MakePaymentBy
            type="primary"
            disabled={
              !applicationNo ||
              !!visaApplicationPayments?.application?.paymentId
            }
            applicationNo={applicationNo}
            onCpaySuccess={handleCpaySuccess}
            onCpayError={handleCpayError}
            onSubmit={async () => {
              const response = await fetchVisaApplicationPayments();
              if (response) setVisaApplication(response);
            }}
          />
        </Flex>
      ) : null}
      <Modal
        open={!!paymentStatus}
        onCancel={handleModalClose}
        onClose={handleModalClose}
        onOk={handleModalClose}
      >
        <Result
          status={paymentStatus}
          title={
            paymentStatus === PaymentStatus.SUCCESS
              ? 'Payment was successfull!'
              : 'Payment failed!'
          }
        />
      </Modal>
    </>
  );
};

export default PaymentSummary;
