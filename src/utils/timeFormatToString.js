import { DateTime } from 'luxon';

const TIME_ZONE = { zone: 'Europe/Kiev' };

export const timeFormatToString = (date) => {
  const parsedDate = DateTime.fromJSDate(date, TIME_ZONE).toString();

  if (parsedDate === 'Invalid DateTime') return date;

  return parsedDate;
};
