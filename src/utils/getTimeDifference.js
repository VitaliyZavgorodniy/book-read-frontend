import { DateTime as dt } from 'luxon';

const DIFF_FORMAT = ['days', 'hours', 'minutes', 'seconds'];

export const getTimeDifference = (start, end, str) => {
  const dateStart = start ?? dt.now();
  const dateEnd = end ?? dt.now();

  const diffTime = dateEnd.diff(dateStart, DIFF_FORMAT);
  const { values: t } = diffTime;

  if (t?.days <= 0 && t?.hours <= 0 && t?.minutes <= 0 && t?.seconds <= 0) {
    return { ...t, isNegative: true };
  }

  return t;
};
