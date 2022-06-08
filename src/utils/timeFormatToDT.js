import { DateTime as dt } from 'luxon';

export const timeFormatToDT = (date) => {
  const formatJS = dt.fromJSDate(date);
  const formatISO = dt.fromISO(formatJS);

  return formatISO;
};