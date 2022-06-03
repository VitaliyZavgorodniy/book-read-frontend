import { DateTime } from 'luxon';

const TIME_ZONE = { zone: 'Europe/Kiev' };

export const parseDateTime = (date) =>
  DateTime.fromJSDate(date, TIME_ZONE).toString();
