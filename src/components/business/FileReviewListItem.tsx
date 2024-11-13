import { getDocumentClassifierName } from '@/lib/visaUtils';
import { ApplicantDocument } from '@/services/visaApplication/typings';
import { Flex, List, Tag } from 'antd';
import clsx from 'clsx';
import { FC } from 'react';
import FileReviewStatus from './FileReviewStatus';

interface Props {
  file: ApplicantDocument;
  className?: string;
  selected?: boolean;
  onClick?: (file: any) => void;
}
const FileReviewListItem: FC<Props> = ({
  file,
  className,
  selected = false,
  onClick,
}) => {
  return (
    <List.Item
      className={clsx(
        'mb-3 [&.selected]:bg-primary-foreground cursor-pointer',
        {
          selected: selected,
        },
      )}
      style={{ border: '1px solid #F5F5F5' }}
      onClick={() => onClick?.(file)}
    >
      <List.Item.Meta
        title={file?.fileName}
        className={clsx(className, '[selected]:bg-primary px-3')}
        description={
          <Flex justify="space-between" className="mt-3">
            <FileReviewStatus file={file} />
            <div>
              <Tag
                color="#F5F5F5"
                style={{ color: '#000000' }}
                className="me-0"
              >
                {getDocumentClassifierName(file?.fileType)}
              </Tag>
            </div>
          </Flex>
        }
      />
    </List.Item>
  );
};

export default FileReviewListItem;
