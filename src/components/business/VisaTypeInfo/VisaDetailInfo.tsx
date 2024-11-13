import useHtmlToMarkdown from '@/hooks/useHtmlToMarkdown';
import { getDateTimeFormat } from '@/lib/dateUtils';
import { Visa } from '@/services/visa/typings';
import {
  ConsulateDatum,
  DocumentSpecification,
  Faq,
  RequiredDocument,
  RequiredVisaForm,
  ShareVisaInfoListTypes,
  Source,
  VisaFeeInInr,
} from '@/types';
import { CopyOutlined, FileOutlined } from '@ant-design/icons';
import {
  Button,
  Divider,
  Flex,
  List,
  message,
  Space,
  Table,
  Tabs,
  Typography,
} from 'antd';
import { FC, useMemo, useRef } from 'react';
import Markdown from 'react-markdown';
import CountryFlag from '../CountryFlag';
import ShareVisaInfo from './ShareVisaInfo';

const { Text } = Typography;

interface SourceProps {
  source: Source[];
}
const SourceComponent: FC<SourceProps> = ({ source }) => {
  return (
    <Space direction="vertical" size={'middle'}>
      <Text strong>Source</Text>
      {source?.map((source) => (
        <Flex vertical key={source.type}>
          <a
            href={source.link}
            target="_blank"
            className="text-primary"
            rel="noreferrer"
          >
            <Flex vertical>
              {source.type}
              <Text type="secondary">
                This content was created on{' '}
                {getDateTimeFormat(source.createdAt)}
              </Text>
            </Flex>
          </a>
        </Flex>
      ))}
    </Space>
  );
};

interface FAQsProps {
  faqs: Faq[];
}
const FAQs: FC<FAQsProps> = ({ faqs }) => {
  return (
    <>
      <Space direction="vertical" size={'middle'}>
        <Text strong>FAQs</Text>
        {faqs?.map((faq) => (
          <Flex vertical key={faq.number}>
            <Text>{faq.question}:</Text>
            <Text type="secondary">{faq?.answer}</Text>
          </Flex>
        ))}
      </Space>
      <Divider />
    </>
  );
};
interface SecurityGuideLinesProps {
  guideLines: string[];
}
const SecurityGuideLines: FC<SecurityGuideLinesProps> = ({ guideLines }) => {
  return (
    <>
      <List
        header={<Text strong>Security GuideLines During Appointment</Text>}
        dataSource={guideLines}
        split={false}
        renderItem={(item) => (
          <List.Item style={{ padding: '4px 0px' }}>
            <Text type="secondary">{item}</Text>
          </List.Item>
        )}
      />
      <Divider />
    </>
  );
};

interface AdditionalNotesProps {
  additionalNotes: string[];
}
const AdditionalNotes: FC<AdditionalNotesProps> = ({ additionalNotes }) => {
  return (
    <>
      <List
        split={false}
        header={<Text strong>Additional Notes</Text>}
        dataSource={additionalNotes}
        renderItem={(note) => (
          <Text type="secondary">
            <Markdown>{note || '-'}</Markdown>
          </Text>
        )}
      />
      <Divider />
    </>
  );
};

interface RequiredDocumentsProps {
  requiredDocuments: RequiredDocument[];
  title?: string;
}
const RequiredDocumentsComponent: FC<RequiredDocumentsProps> = ({
  requiredDocuments,
  title,
}) => {
  const requiredDocumentsRef = useRef<HTMLDivElement>(null);
  const { convert } = useHtmlToMarkdown();

  return (
    <>
      <Space direction="vertical" size={'middle'} ref={requiredDocumentsRef}>
        <Flex align="center">
          <Text strong>{title || 'Required Documents'}</Text>
          <Button
            type="text"
            className="ml-2 text-primary"
            icon={<CopyOutlined label="Copy" />}
            onClick={() => {
              const markdown = convert(requiredDocumentsRef.current as any);
              navigator.clipboard.writeText(markdown);
              message.success('Data copied!!');
            }}
          >
            Copy
          </Button>
        </Flex>
        {requiredDocuments?.map((document) => (
          <Flex vertical key={document.documentName}>
            <Text>{document.documentName}: </Text>
            <Text type="secondary">{document?.description}</Text>
          </Flex>
        ))}
      </Space>
      <Divider />
    </>
  );
};

interface StepsInvolvedProps {
  processOfApplyingVisa: DocumentSpecification[];
}
const StepsInvolved: FC<StepsInvolvedProps> = ({ processOfApplyingVisa }) => {
  return (
    <>
      <Space direction="vertical" size={'middle'}>
        <Text strong>Steps Involved</Text>
        {processOfApplyingVisa?.map((step) => (
          <Flex vertical key={step.number}>
            <Text>Step {step.number}:</Text>
            <Text type="secondary">{step?.description}</Text>
          </Flex>
        ))}
      </Space>
      <Divider />
    </>
  );
};
interface FinancialInformationProps {
  information: string[];
}
const FinancialInformation: FC<FinancialInformationProps> = ({
  information,
}) => {
  return (
    <>
      <List<string>
        dataSource={information}
        header={<Text strong>Financial Information</Text>}
        split={false}
        renderItem={(item) => (
          <Text type="secondary">
            <Markdown>{item}</Markdown>
          </Text>
        )}
      ></List>
      <Divider />
    </>
  );
};
interface DecisionGuideForVisaProps {
  data: string[];
}
const DecisionGuideForVisa: FC<DecisionGuideForVisaProps> = ({ data }) => {
  return (
    <>
      <List<string>
        dataSource={data}
        header={<Text strong>Decision Guide For Visa</Text>}
        split={false}
        renderItem={(item) => (
          <List.Item style={{ padding: '4px 0px' }}>
            <Text type="secondary">
              <Markdown>{item}</Markdown>
            </Text>
          </List.Item>
        )}
      ></List>
      <Divider />
    </>
  );
};

interface VisaFeesProps {
  visaFee: VisaFeeInInr[];
}
const VisaFees: FC<VisaFeesProps> = ({ visaFee }) => {
  return (
    <>
      <Space direction="vertical" size={'middle'}>
        <Text strong>Visa Fees</Text>
        <Table
          pagination={false}
          dataSource={visaFee}
          columns={[
            { title: 'Type', dataIndex: 'label' },
            { title: 'Amount (INR)', dataIndex: 'amount', align: 'end' },
          ]}
        />
      </Space>
      <Divider />
    </>
  );
};
interface AddOnsServicesFeeProps {
  addOnServicesFee: VisaFeeInInr[];
}
const AddOnsServicesFee: FC<AddOnsServicesFeeProps> = ({
  addOnServicesFee,
}) => {
  return (
    <>
      <Space direction="vertical" size={'middle'}>
        <Text strong>Add-ons and other charges</Text>
        <Table
          pagination={false}
          dataSource={addOnServicesFee}
          columns={[
            { title: 'Service Name', dataIndex: 'label' },
            { title: 'Fees(INR)', dataIndex: 'amount', align: 'end' },
          ]}
        />
      </Space>
      <Divider />
    </>
  );
};

interface VisaFormsProps {
  requiredVisaForms: RequiredVisaForm[];
}
const VisaForms: FC<VisaFormsProps> = ({ requiredVisaForms }) => {
  return (
    <>
      <Space direction="vertical" size={'middle'}>
        <Text strong>Visa forms & other formats</Text>
        {requiredVisaForms.map((form) => (
          <Space key={form.formName}>
            <FileOutlined style={{ fontSize: 24 }} />
            <a href={form.formLink} className="text-primary">
              {form.formName}
            </a>
          </Space>
        ))}
      </Space>
      <Divider />
    </>
  );
};

interface VisaEmbassyProps {
  name?: string;
  description?: string;
}
const VisaEmbassy: FC<VisaEmbassyProps> = ({ name, description }) => {
  return (
    <>
      <Space direction="vertical" size={'middle'}>
        <Text strong className="block">
          Embassy/Consulate/Jurisdiction Details
        </Text>
        <div>
          <Text className="block" type="secondary">
            {name}
          </Text>
          <Text className="block" type="secondary">
            {description}
          </Text>
        </div>
      </Space>
      <Divider />
    </>
  );
};

interface Props {
  data: Visa;
  allowedFields?: ShareVisaInfoListTypes[];
}

const VisaDetailInfo: FC<Props> = ({ data, allowedFields }) => {
  const renderIfElementIsAllowed = (
    key: ShareVisaInfoListTypes,
    element: JSX.Element,
  ) => {
    return allowedFields?.length && !allowedFields.includes(key)
      ? null
      : element;
  };

  const renderTabBody = (consulateData: ConsulateDatum) => {
    const additionalDocumentApplicableFor = consulateData?.requiredDocuments
      .flatMap((doc) => doc.applicableFor)
      .filter((doc, index, self) => doc && self.indexOf(doc) === index);

    return (
      <>
        {/* Description Start */}
        <div className="mb-4">
          <Text type="secondary">{data?.introductionOfVisa}</Text>
        </div>
        {/* Description Start */}

        {/* Embassy/Consulate/Jurisdiction Details Start */}
        {renderIfElementIsAllowed(
          ShareVisaInfoListTypes.Embassy,
          <VisaEmbassy
            name={consulateData?.consulateInfo?.name}
            description={consulateData?.consulateInfo?.description}
          />,
        )}
        {/* Embassy/Consulate/Jurisdiction Details End */}

        {/* Visa Fees Start */}
        {renderIfElementIsAllowed(
          ShareVisaInfoListTypes.VisaFee,
          <VisaFees visaFee={data?.visaFee} />,
        )}
        {/* Visa Fees End */}

        {/* Add-ons and other charges Start */}
        {renderIfElementIsAllowed(
          ShareVisaInfoListTypes.AddOnsServicesFee,
          <AddOnsServicesFee addOnServicesFee={data?.addOnServicesFee} />,
        )}
        {/* Add-ons and other charges End */}

        {/* Visa Forms Start */}
        {renderIfElementIsAllowed(
          ShareVisaInfoListTypes.VisaForms,
          <VisaForms requiredVisaForms={consulateData?.requiredVisaForms} />,
        )}
        {/* Visa Forms End */}

        {/* Steps Involved Start */}
        {renderIfElementIsAllowed(
          ShareVisaInfoListTypes.StepsInvolved,
          <StepsInvolved processOfApplyingVisa={data?.processOfApplyingVisa} />,
        )}
        {/* Steps Involved End */}

        {/* Financial Information Start */}
        {renderIfElementIsAllowed(
          ShareVisaInfoListTypes.FinancialInformation,
          <FinancialInformation information={data?.financialInformation} />,
        )}
        {/* Financial Information End */}

        {/* Required Documents Start */}
        {renderIfElementIsAllowed(
          ShareVisaInfoListTypes.RequiredDocuments,
          <RequiredDocumentsComponent
            requiredDocuments={consulateData?.requiredDocuments?.filter(
              (doc) => doc.required,
            )}
          />,
        )}
        {/* Required Documents End */}

        {/* Additional Documents Start */}
        {additionalDocumentApplicableFor?.map((title) =>
          renderIfElementIsAllowed(
            title as ShareVisaInfoListTypes,
            <RequiredDocumentsComponent
              title={`Additional Documents For ${title}`}
              requiredDocuments={consulateData?.requiredDocuments?.filter(
                (doc) =>
                  doc.applicableFor?.includes(title as ShareVisaInfoListTypes),
              )}
            />,
          ),
        )}
        {/* Additional Documents End */}

        {/* Additional Notes Start */}
        {renderIfElementIsAllowed(
          ShareVisaInfoListTypes.AdditionalNotes,
          <AdditionalNotes additionalNotes={data?.additionalNotes} />,
        )}
        {/* Additional Notes End */}

        {/* Decision Guide For Visa Start */}
        {renderIfElementIsAllowed(
          ShareVisaInfoListTypes.DecisionGuideForVisaApplication,
          <DecisionGuideForVisa data={data?.decisionGuideForVisaApplication} />,
        )}
        {/* Decision Guide For Visa End */}

        {/* FAQs Start */}
        {renderIfElementIsAllowed(
          ShareVisaInfoListTypes.FAQs,
          <FAQs faqs={data.faqs} />,
        )}
        {/* FAQs End */}

        {/* Security GuideLines During Appointment Start */}
        {renderIfElementIsAllowed(
          ShareVisaInfoListTypes.SecurityGuideLinesDuringAppointment,
          <SecurityGuideLines
            guideLines={data.securityGuidelinesDuringAppointment}
          />,
        )}
        {/* Security GuideLines During Appointment End */}

        {/* Source Start */}
        {renderIfElementIsAllowed(
          ShareVisaInfoListTypes.Source,
          <SourceComponent source={data.source} />,
        )}
        {/* Source End */}
      </>
    );
  };

  const tabData = useMemo(() => {
    return data?.consulateData?.map((value) => ({
      ...value,
      key: value.value,
      children: renderTabBody(value),
    }));
  }, [data?.consulateData]);

  return (
    <>
      <Flex>
        <Flex vertical>
          <Text strong>
            <Space>
              {data?.origin[0]?.countryCode && (
                <CountryFlag
                  countryCode={data?.origin[0]?.countryCode}
                  alt={data?.origin[0]?.country}
                />
              )}
              {data?.origin?.[0]?.country} -{' '}
              {data?.destination[0]?.countryCode && (
                <CountryFlag
                  countryCode={data?.destination[0]?.countryCode}
                  alt={data?.destination[0]?.country}
                />
              )}
              {data?.destination?.[0]?.country}
            </Space>
          </Text>
          <Text type="secondary">{data?.name}</Text>
        </Flex>
        <ShareVisaInfo visa={data} className="ms-6" />
      </Flex>
      {/* <Divider /> */}
      <Tabs items={tabData}></Tabs>
    </>
  );
};

export default VisaDetailInfo;
