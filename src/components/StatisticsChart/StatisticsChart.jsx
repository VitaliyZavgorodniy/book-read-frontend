import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import { Interval, DateTime as dt } from 'luxon';

import Chart from './Chart';

import { getTimeDifference } from 'utils/getTimeDifference';
import { timeFormatToDT } from 'utils/timeFormatToDT';
import { getDaysInterval } from 'utils/getDaysInterval';

const StatisticsChart = ({ daysAmount, pagesAmount, stats, startDate }) => {
  const [mode, setMode] = useState(0);

  const daysArray = Array.from({ length: daysAmount }, (_, i) => i + 1);

  const avargeData = () => {
    const calculateFact = () => {
      const dtInterval = Interval.fromDateTimes(
        dt.fromISO(startDate),
        dt.now()
      );
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

      const plan = daysArray.map(() => 1 * avargePages);

      return plan;
    };

    const calculateDaysPast = () => {
      const difference = getTimeDifference(timeFormatToDT(startDate));

      return difference?.days;
    };

    return {
      factData: calculateFact(),
      planData: calculatePlan(),
      dayPast: calculateDaysPast(),
    };
  };

  const overallData = () => {
    const calculateFact = () => {
      const dtInterval = Interval.fromDateTimes(
        dt.fromISO(startDate),
        dt.now()
      );
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

      let result = fact.reduce(
        (r, c, i) => (r.push(i ? c + r[i - 1] : c), r),
        []
      );

      return result;
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

    return {
      factData: calculateFact(),
      planData: calculatePlan(),
      dayPast: calculateDaysPast(),
    };
  };

  return (
    <ChartBlock>
      <ModeContainer>
        <ModeSelector isActive={mode === 0} onClick={() => setMode(0)}>
          Avarge
        </ModeSelector>
        <ModeSelector isActive={mode === 1} onClick={() => setMode(1)}>
          Overall
        </ModeSelector>
      </ModeContainer>
      <Chart
        mode={mode}
        labels={daysArray}
        pagesAmount={pagesAmount}
        avargeData={avargeData()}
        overallData={overallData()}
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
  background-color: ${(p) => p.theme.colors.bgSecondary};
  box-shadow: ${(p) => p.theme.shadows.chartItem};

  @media ${breakpoints.tablet} {
    width: 704px;
    height: 340px;
    padding: 35px 49px 50px 48px;
  }
  @media ${breakpoints.desktop} {
    width: 928px;
    padding: 37px 40px;
    margin: 0;
  }
`;

const ModeContainer = styled.div`
  display: flex;
`;

const ModeSelector = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  color: ${(p) =>
    p.isActive ? p.theme.colors.contrast : p.theme.colors.primary};
  background-color: ${(p) =>
    p.isActive ? p.theme.colors.accent : p.theme.bgLight};

  &:hover {
    cursor: pointer;
  }

  &:last-child {
    margin-right: 0;
  }
`;

StatisticsChart.propTypes = {
  daysAmount: PropTypes.number.isRequired,
  pagesAmount: PropTypes.number.isRequired,
  stats: PropTypes.array,
};

export default StatisticsChart;
