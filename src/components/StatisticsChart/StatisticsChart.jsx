import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import { Interval, DateTime as dt } from 'luxon';

import Chart from './Chart';

import { getTimeDifference } from 'utils/getTimeDifference';
import { timeFormatToDT } from 'utils/timeFormatToDT';
import { getDaysInterval } from 'utils/getDaysInterval';

const StatisticsChart = ({ daysAmount, pagesAmount, stats, startDate }) => {
  const daysArray = Array.from({ length: daysAmount }, (_, i) => i + 1);

  const calculateFact = () => {
    const dtInterval = Interval.fromDateTimes(dt.fromISO(startDate), dt.now());
    const datesInterval = [];
    for (let date of getDaysInterval(dtInterval)) {
      datesInterval.push(Number(date.toFormat('yyyyMMdd')));
    }

    const statsByDay = stats.map((item) => ({
      date: dt.fromISO(item.date).toFormat('yyyyMMdd'),
      amount: item.pages,
    }));

    const reducedStats = Array.from(
      statsByDay.reduce(
        (item, { date, amount }) =>
          item.set(date, (item.get(date) || 0) + amount),
        new Map()
      ),
      ([date, amount]) => ({ date, amount })
    );

    const fact = datesInterval.map((item) => {
      const value = reducedStats.find(({ date }) => Number(date) === item);
      if (value) return value.amount;
      return 0;
    });

    return fact;
  };

  const calculatePlan = () => {
    const avargePages = Math.floor(pagesAmount / daysAmount);

    const plan = daysArray.map((item) => item * avargePages);

    return plan;
  };

  const calculateDaysPast = () => {
    const difference = getTimeDifference(timeFormatToDT(startDate));

    return difference?.days;
  };

  return (
    <ChartBlock>
      <Chart
        labels={daysArray}
        data={{
          factData: calculateFact(),
          planData: calculatePlan(),
          dayPast: calculateDaysPast(),
        }}
      />
    </ChartBlock>
  );
};

const ChartBlock = styled.div`
  position: relative;
  width: 280px;
  height: 290px;
  padding: 25px 22px;
  margin: 0 auto;
  @media ${breakpoints.tablet} {
    width: 704px;
    height: 340px;
    padding: 35px 49px;
  }
  @media ${breakpoints.desktop} {
    width: 928px;
    padding: 37px 40px;
    margin: 0;
  }
`;

StatisticsChart.propTypes = {
  daysAmount: PropTypes.number.isRequired,
  pagesAmount: PropTypes.number.isRequired,
  stats: PropTypes.array,
};

export default StatisticsChart;
