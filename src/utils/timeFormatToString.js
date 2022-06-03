import { DateTime } from 'luxon';

const TIME_ZONE = { zone: 'Europe/Kiev' };

export const timeFormatToString = (date) =>
  DateTime.fromJSDate(date, TIME_ZONE).toString();
