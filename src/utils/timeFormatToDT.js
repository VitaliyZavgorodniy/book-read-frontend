import { DateTime as dt } from 'luxon';

export const timeFormatToDT = (date) => {
  const formatJS = dt.fromJSDate(date);

  if (formatJS.invalid) {
    return dt.fromISO(date);
  }

  return dt.fromISO(formatJS);
};
