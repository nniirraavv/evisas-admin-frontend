export interface PresignedUrlParams {
  /**
   * @description Name of file
   */
  fileName: string;
  /**
   * @description Size of file in bytes
   */
  fileSize: number;
  /**
   * @description Category of the selected file, for ex. `Letter`
   */
  fileType: string;
  /**
   * @description Mime type of the file
   */
  fileContentType: string;
}

export interface PresignedUrlResponse {
  preSigned: PreSigned;
  objectKey: string;
  fileSize: number;
  fileName: string;
}

export interface PassportOcrResponse {
  status: string;
  item: {
    ocrdata: PassportOcrItem;
    fileDocument: {
      fileObjectKey: string;
      fileName: string;
    };
  };
}

export interface PassportItemValue {
  value: string;
  confidence: number;
}

export interface PassportOcrItem {
  [name: string]: PassportItemValue;
}
export interface FileUploadResponse {
  data: any;
}

export interface PreSigned {
  url: string;
  fields: Fields;
}

export interface Fields {
  key: string;
  'Content-Type': string;
  bucket: string;
  'X-Amz-Algorithm': string;
  'X-Amz-Credential': string;
  'X-Amz-Date': string;
  'X-Amz-Security-Token': string;
  Policy: string;
  'X-Amz-Signature': string;
}
