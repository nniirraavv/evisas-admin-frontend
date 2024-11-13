import { DateFormats } from '@/constants';
import { RuleObject } from 'antd/es/form';
import dayjs from 'dayjs';

export function getDayJsObject(date: string) {
  return dayjs(new Date(date));
}
export function getDateTimeFormat(date: string) {
  return dayjs(new Date(date)).format('MMMM D, YYYY h:mm A');
}
export function getDateByFormat({
  date,
  format,
}: {
  date?: string;
  format: DateFormats;
}) {
  if (!date) return '';
  return dayjs(new Date(date)).format(format);
}
export function normalizeToServerDate(date: string) {
  return getDateByFormat({ date, format: DateFormats.Server });
}
export function mapValueToDayjsDate(value: string) {
  return {
    value: value && dayjs(value),
  };
}
export function isDateValid_Validator(rule: RuleObject, value: any) {
  try {
    if (dayjs(new Date(value)).isValid()) {
      return Promise.resolve();
    } else {
      return Promise.reject('Invalid date');
    }
  } catch (error) {
    return Promise.reject('Invalid date');
  }
}
export function passportExpiry_Validator(rule: RuleObject, value: any) {
  const currentDate = dayjs(new Date());
  const newDate = getDayJsObject(value);
  if (newDate.isBefore(currentDate)) {
    return Promise.reject('The passport has already expired!');
  } else {
    return Promise.resolve();
  }
}
