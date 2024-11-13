import { Button, List } from 'antd';
import { saveAs } from 'file-saver';
import React from 'react';
import { IRequiredDocumentInfo } from '../../types';

interface RequiredDocumentInfoProps {
  documents: IRequiredDocumentInfo[];
}

const RequiredDocumentInfo: React.FC<RequiredDocumentInfoProps> = ({
  documents,
}) => {
  return (
    <List
      size="small"
      style={{ maxWidth: 500 }}
      dataSource={documents}
      renderItem={(item) => (
        <List.Item style={{ padding: '2px 8px' }}>
          {item.label}
          {item.downloadURL ? (
            <>
              -{' '}
              <Button
                type="link"
                onClick={(e) => {
                  e.preventDefault();
                  if (item.downloadURL) {
                    saveAs(item.downloadURL, item.label);
                  }
                }}
              >
                Download Format
              </Button>
            </>
          ) : null}
        </List.Item>
      )}
    />
  );
};

export default RequiredDocumentInfo;
