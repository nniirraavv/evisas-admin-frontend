import FilePreviewCard from '@/components/business/FilePreviewCard';
import FileReviewListItem from '@/components/business/FileReviewListItem';
import FileReviewStatus from '@/components/business/FileReviewStatus';
import RequiredDocumentsPicker from '@/components/business/RequiredDocumentsPicker';
import { VISA_APPLICATION_DOCUMENT_CLASSIFIERS } from '@/constants';
import { isFileImage } from '@/lib/utils';
import { getTravellerStatusUpdateActions } from '@/lib/visaUtils';
import { RequiredDocument } from '@/services/visa/typings';
import { uploadApplicantDocument } from '@/services/visaApplication/helper';
import {
  ApplicantDocument,
  Traveller,
} from '@/services/visaApplication/typings';
import {
  deleteApplicantDocument,
  updateApplicantDocument,
} from '@/services/visaApplication/VisaApplicantController';
import { getVisaApplication } from '@/services/visaApplication/VisaApplicationController';
import { EFileReviewStatus } from '@/types';
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  EyeOutlined,
  FileImageOutlined,
  FilePdfOutlined,
  MoreOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { ProColumns, ProForm, ProTable } from '@ant-design/pro-components';
import { useModel, useParams } from '@umijs/max';
import { useMount } from 'ahooks';
import {
  Button,
  Col,
  Collapse,
  ConfigProvider,
  Dropdown,
  Empty,
  Flex,
  Form,
  Image,
  List,
  Modal,
  ModalFuncProps,
  Popconfirm,
  Row,
  Select,
  Space,
  Spin,
  Tooltip,
  Typography,
  Upload,
  message,
} from 'antd';
import { UploadFile, UploadProps } from 'antd/es/upload';
import { saveAs } from 'file-saver';
import { FC, Fragment, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';

const { Text } = Typography;
interface DocumentClassifierFields {
  documentType: string;
}
interface DocumentUploaderProps {
  onFileUploaded: (file: any) => void;
  applicationNo: string;
  travellerNo: string;
}

const DocumentUploader: FC<DocumentUploaderProps> = ({
  onFileUploaded,
  travellerNo,
  applicationNo,
}) => {
  const [form] = Form.useForm<DocumentClassifierFields>();
  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);
  const [modal, contextHolder] = Modal.useModal();

  const handleChange: UploadProps['onChange'] = (info) => {
    let newFileList = [...info.fileList];
    setFileList(newFileList);
  };

  const props: UploadProps = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    maxCount: 1,
    showUploadList: {
      showRemoveIcon: false,
    },
  };

  const config: ModalFuncProps = {
    title: 'Choose A Document Classifier',
    okText: 'Save',
    content: (
      <Form form={form} layout="vertical">
        <Form.Item name="documentType">
          <Select options={VISA_APPLICATION_DOCUMENT_CLASSIFIERS} showSearch />
        </Form.Item>
      </Form>
    ),
  };

  return (
    <>
      <div
        className="w-full flex justify-center align-middle p-6 border-2 border-dashed rounded-sm"
        style={{ backgroundColor: '#FAFAFA' }}
      >
        <Flex justify="center">
          <Flex className="w-auto mr-6 cursor-pointer">
            <FilePdfOutlined style={{ fontSize: 48, color: 'red' }} />
            <FileImageOutlined style={{ fontSize: 48, color: 'skyblue' }} />
          </Flex>
          <div>
            <Text strong className="text-lg">
              Document classifier
            </Text>
            <p className="mb-3">classify and identify documents</p>
            <Upload
              {...props}
              fileList={fileList}
              beforeUpload={async (file) => {
                const confirmed = await modal.confirm(config);
                if (confirmed) return file;
                message.error('Document not uploaded!');
                return false;
              }}
              onChange={handleChange}
              customRequest={async ({ file, onSuccess, onProgress }) => {
                try {
                  const { documentType } = form?.getFieldsValue();
                  const applicantDocument = await uploadApplicantDocument(
                    applicationNo,
                    travellerNo,
                    file,
                    documentType,
                    onProgress,
                    onSuccess,
                  );

                  if (applicantDocument) onFileUploaded(applicantDocument);

                  setFileList([]);
                } catch (error) {
                  console.log('Error:', error);
                }
              }}
            >
              <Button icon={<UploadOutlined />}>Upload Documents</Button>
            </Upload>
            <p>
              <small className="text-primary">
                supported file formats: .pdf, .jpg, .png
              </small>
            </p>
          </div>
        </Flex>
      </div>
      {contextHolder}
    </>
  );
};

interface TravellerEditActionProps {
  showTravellerEdit?: boolean;
  handleTravellerEdit?: (travellerNo: string) => void;
  showTravellerDelete?: boolean;
  handleTravellerDelete?: (travellerNo: string) => void;
  readonly?: boolean;
}
interface TravellerDocumentsProps extends TravellerEditActionProps {
  traveller: Traveller;
  travellerIndex: number;
  applicationNo: string;
  applicationStatus?: string;
  requiredDocuments: RequiredDocument[];
}
const TravellerDocuments: FC<
  TravellerDocumentsProps & {
    onFiles: (files: ApplicantDocument[]) => void;
    files: ApplicantDocument[];
  }
> = ({
  traveller,
  requiredDocuments,
  applicationNo,
  applicationStatus,
  files,
  onFiles,
  showTravellerEdit,
  handleTravellerEdit,
  showTravellerDelete,
  handleTravellerDelete,
  travellerIndex,
  readonly,
}) => {
  const [open, setOpen] = useState<any>();
  const [deleting, setDeleting] = useState<string>();
  const [fileForPreiview, setFileForPreiview] = useState<ApplicantDocument>();
  const [currentFile, setCurrentFile] = useState<ApplicantDocument>();

  const closeModal = () => setOpen(undefined);

  const previewFile = fileForPreiview || currentFile;
  const previousFiles = useMemo(() => {
    return files.filter((f) => f.fileId !== currentFile?.fileId);
  }, [files, currentFile]);

  const handleFileUploaded = (file: ApplicantDocument) => {
    setOpen(traveller);
    const newFile = {
      ...file,
      reviewStatus: EFileReviewStatus.NotReviewed,
      id: uuid(),
    };
    onFiles([...files, newFile]);
    setCurrentFile(newFile);
    setFileForPreiview(newFile);
  };
  const handleFileView = (file: ApplicantDocument) => {
    setOpen(traveller);
    setCurrentFile({ ...file });
    setFileForPreiview({ ...file });
  };
  const handleFileDelete = async (file: ApplicantDocument) => {
    closeModal();
    try {
      setDeleting(file?.fileId);
      await deleteApplicantDocument(
        applicationNo,
        traveller?.travellerNo,
        file?.fileId,
      );
      const fileIndex = files.findIndex((f) => f?.fileId === file?.fileId);
      if (fileIndex >= 0) {
        const newFiles = files.filter((f) => f?.fileId !== file?.fileId);
        onFiles(newFiles);
        message.success(`${file.fileName} file deleted successfully`);
      }
    } catch (error) {
      console.log('Error on file delete: ', error);
    } finally {
      setDeleting(undefined);
    }
  };
  const handleFileDownload = async (file: ApplicantDocument) => {
    try {
      if (file.fileS3Key) {
        saveAs(file.fileS3Key, file.fileName);
      }
    } catch (error) {
      message.error('Failed to download file');
      console.log('Error on file delete: ', error);
    } finally {
      setDeleting(undefined);
    }
  };
  const handleFileApproved = async (file: ApplicantDocument) => {
    try {
      await updateApplicantDocument(
        applicationNo,
        traveller?.travellerNo,
        file?.fileId,
        { isApproved: true },
      );
      const fileIndex = files.findIndex((f) => f?.fileId === file?.fileId);
      if (fileIndex >= 0) {
        const newFiles = [...files];
        const updatedFile = {
          ...file,
          isApproved: true,
        };
        newFiles[fileIndex] = updatedFile;
        onFiles(newFiles);
        setFileForPreiview(updatedFile);
        setCurrentFile(updatedFile);
        message.success(`${file.fileName} file approved successfully`);
      }
    } catch (error) {
      console.log('Error on file update : ', error);
    }
  };
  const handleClassifierChange = async (
    value: string,
    file: ApplicantDocument,
  ) => {
    try {
      await updateApplicantDocument(
        applicationNo,
        traveller?.travellerNo,
        file?.fileId,
        { documentType: value },
      );
      const fileIndex = files.findIndex((f) => f?.fileId === file?.fileId);
      if (fileIndex >= 0) {
        const newFiles = [...files];
        const updatedFile = {
          ...file,
          fileType: value,
        };
        newFiles[fileIndex] = updatedFile;
        onFiles(newFiles);
        setFileForPreiview(updatedFile);
        setCurrentFile(updatedFile);
        message.success(
          `${file.fileName} file classifier updated successfully`,
        );
      }
    } catch (error) {
      console.log('Error on file update : ', error);
    }
  };

  const columns: ProColumns<ApplicantDocument>[] = [
    {
      title: 'Preview',
      dataIndex: 'preview',
      render(_, entity) {
        return isFileImage(entity?.fileObjectKey) ? (
          <Image
            width={54}
            height={54}
            onError={(e) => {
              console.log('// TODO: Image Load error : ', e);
            }}
            src={entity?.fileS3Key}
          />
        ) : (
          <FilePdfOutlined style={{ fontSize: 54, color: 'red' }} />
        );
      },
    },
    {
      title: 'Document Name',
      dataIndex: 'fileName',
      align: 'left',
      onHeaderCell: () => ({
        colSpan: 3,
      }),
      onCell: () => ({
        colSpan: 3,
      }),
      render(_, entity) {
        return <Text>{entity.fileName}</Text>;
      },
    },
    {
      title: 'Document Type',
      dataIndex: 'classificationType',
      render(_, entity) {
        return (
          <Select
            showSearch
            options={VISA_APPLICATION_DOCUMENT_CLASSIFIERS}
            value={entity.fileType}
            disabled={readonly || entity?.isApproved}
            onChange={(value) => handleClassifierChange(value, entity)}
          />
        );
      },
    },
    {
      title: 'Status',
      dataIndex: 'reviewStatus',
      render(_, entity) {
        return <FileReviewStatus file={entity} />;
      },
    },
    {
      render(_, entity) {
        return (
          <Space>
            <Button
              icon={<EyeOutlined />}
              onClick={() => handleFileView(entity)}
            ></Button>
            {readonly ? null : (
              <Popconfirm
                title="Delete Document"
                description="Are you sure to delete this document?"
                onConfirm={() => handleFileDelete(entity)}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  loading={deleting === entity?.fileId}
                  icon={<DeleteOutlined />}
                ></Button>
              </Popconfirm>
            )}
            <Button
              icon={<DownloadOutlined />}
              onClick={(e) => {
                e.preventDefault();
                handleFileDownload(entity);
              }}
            ></Button>
          </Space>
        );
      },
    },
  ];

  const items = useMemo(
    () =>
      getTravellerStatusUpdateActions(
        applicationNo,
        traveller?.travellerNo,
        applicationStatus,
      ),
    [applicationStatus],
  );

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              headerBg: 'white',
            },
          },
        }}
      >
        <Collapse
          className="w-full"
          defaultActiveKey={
            travellerIndex === 0 ? traveller?.travellerNo : undefined
          }
          items={[
            {
              key: traveller.travellerNo,
              label: (
                <Flex justify="space-between">
                  <Text
                    strong
                  >{`${traveller.givenName} ${traveller.surName}`}</Text>
                  <div>
                    {!readonly && showTravellerEdit ? (
                      <Tooltip title="Edit Traveller" placement="left">
                        <Button
                          shape="circle"
                          type="text"
                          icon={<EditOutlined />}
                          onClick={(e) => {
                            e?.preventDefault();
                            e?.stopPropagation();
                            handleTravellerEdit?.(traveller?.travellerNo);
                          }}
                        />
                      </Tooltip>
                    ) : null}
                    {!readonly && showTravellerDelete ? (
                      <Tooltip title="Delete Traveller" placement="left">
                        <Popconfirm
                          title="Delete Traveller"
                          description="Are you sure to delete this traveller?"
                          onConfirm={(e) => {
                            e?.preventDefault();
                            e?.stopPropagation();
                            handleTravellerDelete?.(traveller?.travellerNo);
                          }}
                          okText="Yes"
                          cancelText="No"
                          onPopupClick={(e) => {
                            e?.preventDefault();
                            e?.stopPropagation();
                          }}
                        >
                          <Button
                            shape="circle"
                            type="text"
                            icon={<DeleteOutlined />}
                            onClick={(e) => {
                              e?.preventDefault();
                              e?.stopPropagation();
                            }}
                          />
                        </Popconfirm>
                      </Tooltip>
                    ) : null}
                    {items?.length ? (
                      <Dropdown menu={{ items }} trigger={['click']}>
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          icon={<MoreOutlined />}
                        />
                      </Dropdown>
                    ) : null}
                  </div>
                </Flex>
              ),
              children: [
                <Fragment key={'add_documents'}>
                  {readonly ? null : (
                    <DocumentUploader
                      key={'document_uploader'}
                      onFileUploaded={handleFileUploaded}
                      applicationNo={applicationNo}
                      travellerNo={traveller?.travellerNo}
                    />
                  )}
                  {readonly ? null : (
                    <Form.Item
                      name="requiredDocuments"
                      rules={[
                        {
                          validator() {
                            if (requiredDocuments.length > 0) {
                              return Promise.reject(
                                'Please add all the required documents for this traveller',
                              );
                            } else {
                              return Promise.resolve();
                            }
                          },
                        },
                      ]}
                    >
                      <RequiredDocumentsPicker
                        key={'required_documents'}
                        className="mt-3"
                        uploadedFiles={files}
                        onFileUploaded={handleFileUploaded}
                        requiredDocuments={requiredDocuments}
                        travellerNo={traveller?.travellerNo}
                        applicationNo={applicationNo}
                      />
                    </Form.Item>
                  )}
                  <Form.Item
                    name="uploadedDocuments"
                    rules={[
                      {
                        validator() {
                          const pendingApprovals = files.filter(
                            (f) => !f.isApproved,
                          );
                          if (pendingApprovals.length > 0) {
                            return Promise.reject(
                              'Please approve all added documents for this traveller',
                            );
                          } else {
                            return Promise.resolve();
                          }
                        },
                      },
                    ]}
                  >
                    <ProTable<ApplicantDocument>
                      key={'uploaded_documents'}
                      headerTitle="Uploaded Documents"
                      rowKey="fileId"
                      dataSource={files}
                      columns={columns}
                      search={false}
                      options={{ reloadIcon: false }}
                      cardProps={{ bodyStyle: { padding: 0 } }}
                    />
                  </Form.Item>
                </Fragment>,
              ],
            },
          ]}
        />
      </ConfigProvider>
      <Modal
        style={{ top: 20 }}
        title={<p>Review document for {open?.title} (3 Files)</p>}
        footer={
          <Button type="primary" onClick={closeModal}>
            Done
          </Button>
        }
        open={open}
        onCancel={closeModal}
        width={1000}
      >
        <Row gutter={[24, 24]}>
          <Col span={16}>
            {previewFile ? (
              <FilePreviewCard
                file={previewFile}
                readonly={readonly}
                documentClassifier={VISA_APPLICATION_DOCUMENT_CLASSIFIERS}
                onFileDelete={handleFileDelete}
                onFileApproved={handleFileApproved}
                onClassifierChange={(value) => {
                  if (previewFile) handleClassifierChange(value, previewFile);
                }}
              />
            ) : (
              <Empty />
            )}
          </Col>
          <Col span={8}>
            {currentFile ? (
              <List<ApplicantDocument>
                rowKey={'fileId'}
                dataSource={[currentFile]}
                renderItem={(file) => (
                  <FileReviewListItem
                    file={file}
                    selected={previewFile?.fileId === file.fileId}
                    onClick={(file) => setFileForPreiview(file)}
                  />
                )}
              />
            ) : null}

            <List
              rowKey={'fileId'}
              header="Previously uploaded"
              dataSource={previousFiles}
              style={{ height: 500, overflowY: 'scroll' }}
              renderItem={(file, index) => (
                <FileReviewListItem
                  key={file?.fileName || index}
                  file={file}
                  className="mb-3"
                  selected={previewFile?.fileId === file.fileId}
                  onClick={(file) => setFileForPreiview(file)}
                />
              )}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

const TravellerComponent: FC<TravellerDocumentsProps> = ({
  requiredDocuments,
  ...rest
}) => {
  const [files, setFiles] = useState<ApplicantDocument[]>(
    rest?.traveller?.fileDocuments || [],
  );

  const pendingRequiredDocument = useMemo(() => {
    const uploadedDocumentTypes = files?.map((f) => f.fileType);
    return requiredDocuments?.filter((document) => {
      return !uploadedDocumentTypes.includes(document.documentType);
    });
  }, [requiredDocuments, files]);

  return (
    <ProForm.Item
      key={rest?.traveller.travellerNo}
      name="documents"
      rules={[
        {
          type: 'array',
          min: 2,
          message: 'Please upload the required documents',
        },
      ]}
    >
      <TravellerDocuments
        {...rest}
        onFiles={setFiles}
        files={files}
        requiredDocuments={pendingRequiredDocument}
      />
    </ProForm.Item>
  );
};

const Step_Two: FC<TravellerEditActionProps> = (props) => {
  const { applicationNo } = useParams();
  const [spinning, setSpinning] = useState(false);
  const { data: visaApplication, setData: setVisaApplication } =
    useModel('visaApplication');

  const fetchVisaApplicationInfo = async () => {
    if (!applicationNo) return;
    try {
      setSpinning(true);
      const response = await getVisaApplication(applicationNo);
      if (response) setVisaApplication(response.item);
    } finally {
      setSpinning(false);
    }
  };

  useMount(() => {
    // Fetch visa info
    if (visaApplication?.applicationNo !== applicationNo) {
      fetchVisaApplicationInfo();
    }
  });
  const requiredDocuments = useMemo(() => {
    const consulateValue = visaApplication?.consulate;
    const consulateData =
      visaApplication?.visaInformation?.visaInfoObject?.consulateData?.find(
        (c) => c?.value === consulateValue,
      );
    if (consulateData) {
      return consulateData?.requiredDocuments?.filter(
        (document) => document?.required,
      );
    }
    return [];
  }, [visaApplication]);

  return (
    <Spin spinning={spinning}>
      <ProForm.Item name="travellers" initialValue={[]} className="mb-0">
        <List style={{ width: '100%' }}>
          {visaApplication?.travellers?.map((traveller, index) => (
            <TravellerComponent
              traveller={traveller}
              travellerIndex={index}
              key={traveller.travellerNo}
              requiredDocuments={requiredDocuments}
              applicationNo={visaApplication?.applicationNo}
              applicationStatus={visaApplication?.currentStatus}
              {...props}
            />
          ))}
        </List>
      </ProForm.Item>
    </Spin>
  );
};

export default Step_Two;
