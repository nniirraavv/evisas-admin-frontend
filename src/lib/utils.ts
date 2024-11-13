import { IMAGE_FILE_EXTENSIONS } from '@/constants';
import { EmailData, Traveller } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import QueryString from 'qs';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function isFilePDF(file: any) {
  return file?.type === 'application/pdf';
}
export function isFileImage(fileNameWithExtension: string) {
  return (
    IMAGE_FILE_EXTENSIONS.findIndex((extension) =>
      fileNameWithExtension.includes(extension),
    ) > -1
  );
}
export function createWhatsappHref(text: string) {
  const queryString = QueryString.stringify({ text });
  return `https://api.whatsapp.com/send?${queryString}`;
}
export function createEmailHref({ email, ...rest }: EmailData) {
  const queryString = QueryString.stringify(rest);
  return `mailto:${email}?${queryString}`;
}

export function getTravellerName(data?: Traveller) {
  if (!data) return '';
  return `${data?.title}. ${data?.givenName || ''} ${data?.surName}`;
}
export const sortTypeMapper = (type?: string | null) => {
  if (!type) return undefined;
  return type === 'ascend' ? 'asc' : 'deSC';
};
