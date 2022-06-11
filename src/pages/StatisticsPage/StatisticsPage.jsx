import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import GoalsBoard from 'components/GoalsBoard';
import CountdownPanel from 'components/CountdownPanel';
import StatisticsChart from 'components/StatisticsChart';
import StatisticTable from 'components/StatisticTable';
import BooksList from './BooksList';

import { getCurrentEndYearDate } from 'utils/getCurrentEndYearDate';
import { getTimeDifference } from 'utils/getTimeDifference';

import { timeFormatToDT } from 'utils/timeFormatToDT';

const StatisticsPage = ({ status, training, stats, onLoadTraining }) => {
  useEffect(() => {
    onLoadTraining();
  }, []);

  const handleDaysDifference = (start) => {
    if (!start) {
      if (!training.endDate) return 0;

      const difference = getTimeDifference(
        null,
        timeFormatToDT(training.endDate)
      );

      return difference?.days;
    }

    if (!training.endDate) return 0;

    const difference = getTimeDifference(
      timeFormatToDT(start),
      timeFormatToDT(training.endDate)
    );

    return difference?.days;
  };

  return (
    <Wrapper>
      <WrapperLeft>
        <Counters>
          <CountdownPanel
            title="Years countdown"
            dateTo={getCurrentEndYearDate()}
          />
          <CountdownPanel title="Goals countdown" dateTo={training.endDate} />
        </Counters>

        <BooksList />

        {status && (
          <StatisticsChart
            startDate={training.startDate}
            daysAmount={handleDaysDifference(training.startDate)}
            pagesAmount={training.pagesAmount}
            stats={stats}
          />
        )}
      </WrapperLeft>

      <WrapperRight>
        <GoalsBoard
          data={[
            {
              id: 'books',
              label: 'Amount of books',
              value: training.books.length,
            },
            {
              id: 'days',
              label: 'Amount of days',
              value: handleDaysDifference(),
            },
            {
              accent: true,
              id: 'leftbooks',
              label: 'Books left',
              value: training.books.filter(
                (book) => book.status !== 'completed'
              ).length,
            },
          ]}
        />

        {stats.length ? <StatisticTable items={stats} /> : null}
      </WrapperRight>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Counters = styled.div`
  display: flex;
  justify-content: space-around;
`;

const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export default StatisticsPage;
