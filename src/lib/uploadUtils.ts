import { ApplicantDocument } from '@/services/visaApplication/typings';
import { PartialAntFile } from '@/types';
import { RcFile } from 'rc-upload/lib/interface';

export function mapAntFileToServerFile(
  file: RcFile & {
    response: {
      file: {
        uid: string;
      };
    };
  },
) {
  if (!file) return;
  return {
    fileName: file?.name,
    fileObjectKey: file?.response?.file?.uid || file?.uid,
  };
}
export function mapServerFileToAntFile(
  file: ApplicantDocument,
): PartialAntFile | undefined {
  if (!file) return;
  return {
    name: file?.fileName,
    type: file?.fileType,
    uid: file?.fileObjectKey,
  };
}
export function getFileObject(file: RcFile) {
  if (!file) return {};
  return {
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    webkitRelativePath: file.webkitRelativePath,
    lastModified: file.lastModified,
    arrayBuffer: file.arrayBuffer,
    silce: file.slice,
    stream: file.stream,
    text: file.text,
  };
}
