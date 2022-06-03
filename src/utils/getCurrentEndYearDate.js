import { DateTime as dt } from 'luxon';

const TIME_ZONE = 'Europe/Kiev';

export const getCurrentEndYearDate = () =>
  dt.now().setZone(TIME_ZONE).endOf('year').toISO();
