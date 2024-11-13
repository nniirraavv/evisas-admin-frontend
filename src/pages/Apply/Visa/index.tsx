import ProcessingType from '@/components/business/Tags/ProcessingType/ProcessingType';
// import VisaPriceBreakdown from '@/components/business/VisaPriceBreakdown/VisaPriceBreakdown';
import VisaDetailInfo from '@/components/business/VisaTypeInfo/VisaDetailInfo';
import services from '@/services/countries';
import { Visa, VisaFeeType, VisaSearchParams } from '@/services/visa/typings';
import { queryVisasList, saveVisaInfo } from '@/services/visa/VisaController';
import { VisaInfoProviders, VisaStepsSlug, VisaTypes } from '@/types';
import { InfoCircleOutlined } from '@ant-design/icons';
import { PageContainer, ProList } from '@ant-design/pro-components';
import { useLocation, useModel, useNavigate } from '@umijs/max';
import {
  Button,
  Col,
  ConfigProvider,
  Drawer,
  Row,
  Space,
  Spin,
  Table,
  Typography,
} from 'antd';
import qs from 'qs';
import { useMemo, useState } from 'react';
import { FormSteps } from './$id';

const { Text, Title } = Typography;

const { fetchCountries } = services.CountriesController;

const VisaResults = () => {
  const [visaForView, setVisaForView] = useState<Visa>();
  const [applying, setApplying] = useState<string>();
  const location = useLocation();
  const { setData } = useModel('visa');
  const navigate = useNavigate();
  const searchParams = useMemo(() => {
    const paramsString = location?.search?.split('?');
    return qs.parse(paramsString[1]) as unknown as VisaSearchParams;
  }, [location?.search]);

  const handleSelect = async (visaInfo: Visa) => {
    try {
      setApplying(visaInfo?.id);
      // save visa info
      const response = await saveVisaInfo({
        visaInfoObject: visaInfo,
        visaInfoProvider: VisaInfoProviders.ON_ARRIVAL,
      });
      const origin = response?.item?.visaInfoObject?.origin?.[0];
      const destination = response?.item?.visaInfoObject?.destination?.[0];
      setData({
        visaInfo: {
          visaInfoObject: response?.item?.visaInfoObject,
          visaInfoProvider: response?.item?.visaInfoProvider,
        },
        sourceCountry: origin?.countryCode,
        destinationCountry: destination?.countryCode,
      });
      setTimeout(() => {
        // Set timeout to allow model data to be set in a previous render
        navigate(
          `/apply/visa/${visaInfo.id}/${FormSteps.One}/${VisaStepsSlug.TravelDetails}`,
        );
      });
    } finally {
      setApplying(undefined);
    }
  };
  const closeModal = () => setVisaForView(undefined);
  const openModal = (data: Visa) => setVisaForView(data);
  const handleViewVisaDetails = (data: Visa) => {
    openModal(data);
  };

  return (
    <>
      <PageContainer>
        <ProList<Visa>
          rowKey="id"
          cardProps={{ style: { padding: 0 } }}
          form={{ initialValues: searchParams }}
          itemCardProps={{ ghost: true, bordered: false }}
          search={{
            collapsed: false,
            searchText: 'Search',
            layout: 'vertical',
          }}
          request={async (searchParams: any) => {
            const response = await queryVisasList(searchParams);
            return { data: response?.item?.visas || [], success: true };
          }}
          split={true}
          pagination={false}
          renderItem={(item: Visa) => {
            return (
              <div className="my-8 border border-slate-50	rounded-sm">
                <div className="bg-primary p-2 border border-primary rounded-ss-sm rounded-se-sm">
                  <Text strong className="text-primary-foreground text-lg ms-2">
                    {item.name}
                  </Text>
                </div>
                <Row align={'bottom'} className="rounded-es-sm rounded-ee-sm">
                  <Col xs={24} sm={24} md={18} lg={20} xl={20}>
                    <ConfigProvider
                      theme={{
                        components: {
                          Table: {
                            headerSplitColor: 'transparent',
                            borderColor: 'transparent',
                          },
                        },
                      }}
                    >
                      <Table
                        rowKey={'id'}
                        dataSource={[item]}
                        scroll={{ x: 500 }}
                        columns={[
                          {
                            title: 'Proccessing Time',
                            dataIndex: 'processingTime',
                            className: 'text-primary',
                            fixed: 'left',
                            render(text) {
                              return <Text>{text}</Text>;
                            },
                          },
                          {
                            title: 'Stay Period',
                            dataIndex: 'stayPeriod',
                            render(text) {
                              return <Text>{text}</Text>;
                            },
                          },
                          {
                            title: 'Validity',
                            dataIndex: 'validity',
                            render(text) {
                              return <Text>{text}</Text>;
                            },
                          },
                          {
                            title: 'Visa Type',
                            dataIndex: 'visaType',
                            render(text) {
                              return <Text>{text}</Text>;
                            },
                          },
                          {
                            title: 'Price',
                            dataIndex: 'products',
                            fixed: 'right',
                            render(_, info) {
                              const visaFee = info.visaFee;
                              const adult = visaFee.find(
                                (f) => f.type === VisaFeeType.ADULT,
                              );
                              return (
                                <Text>
                                  <Space>
                                    {adult?.amount || 0} {adult?.currency}
                                    {/* <Popover
                                      content={
                                        <VisaPriceBreakdown visaFee={visaFee} />
                                      }
                                      title="Price Breakdown"
                                      trigger={['click']}
                                    >
                                      <InfoCircleOutlined />
                                    </Popover> */}
                                  </Space>
                                </Text>
                              );
                            },
                          },
                        ]}
                        pagination={false}
                        bordered={false}
                      />
                    </ConfigProvider>
                  </Col>
                  <Col xs={24} sm={24} md={6} lg={4} xl={4} className="pr-4">
                    <Row
                      justify="end"
                      align={'middle'}
                      className="m-4"
                      gutter={[8, 8]}
                    >
                      <Col md={24} lg={24} xl={24}>
                        <Button
                          key="visa-select"
                          loading={applying === item?.id}
                          onClick={() => handleSelect(item)}
                          type="primary"
                          className="float-right"
                        >
                          Apply
                        </Button>
                      </Col>
                      <Col md={24} lg={24} xl={24}>
                        <Button
                          key="visa-view-details"
                          className="float-right"
                          icon={<InfoCircleOutlined />}
                          onClick={() => handleViewVisaDetails(item)}
                        >
                          Visa Details
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            );
          }}
          metas={{
            title: {
              search: false,
              dataIndex: 'name',
              render(_, entity) {
                return (
                  <div className="ml-3">
                    <Title level={4}>
                      {/* @ts-ignore */}
                      {entity?.name}
                    </Title>
                  </div>
                );
              },
            },
            subTitle: {
              search: false,
              dataIndex: 'labels',
              render(_, entity) {
                return <ProcessingType value={entity?.processingType} />;
              },
            },
            actions: {
              search: false,
              cardActionProps: 'extra',
              render() // _, info
              {
                return (
                  <Button
                    key="visa-select"
                    // onClick={() => handleSelect(info)}
                    type="primary"
                  >
                    Select
                  </Button>
                );
              },
            },
            originCountryCode: {
              title: 'Origin',
              dataIndex: 'originCountryCode',
              valueType: 'select',
              // @ts-ignore
              debounceTime: 500,
              fieldProps: { showSearch: true },
              proFieldProps: { emptyText: <Spin size="small" /> },
              request: ({ keyWords }: any) => {
                return fetchCountries(keyWords);
              },
            },
            destinationCountryCode: {
              title: 'Destination',
              dataIndex: 'destinationCountryCode',
              valueType: 'select',
              // @ts-ignore
              debounceTime: 500,
              fieldProps: { showSearch: true },
              proFieldProps: { emptyText: <Spin size="small" /> },
              request: ({ keyWords }: any) => {
                return fetchCountries(keyWords);
              },
            },
            visaType: {
              title: 'Visa Type',
              dataIndex: 'visaType',
              valueType: 'select',
              fieldProps: { showSearch: true },
              // @ts-ignore
              request: () => {
                return Object.values(VisaTypes).map((v) => ({
                  value: v,
                  label: v,
                }));
              },
            },
          }}
        />
      </PageContainer>
      <Drawer
        width={1000}
        title="Visa Info"
        style={{ top: 20 }}
        open={!!visaForView}
        onClose={closeModal}
        footer={
          <Button type="primary" onClick={closeModal}>
            Done
          </Button>
        }
      >
        {!!visaForView && <VisaDetailInfo data={visaForView} />}
      </Drawer>
    </>
  );
};

export default VisaResults;
