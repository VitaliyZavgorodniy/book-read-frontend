import { useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import Media from 'react-media';

import GoalsBoard from 'components/GoalsBoard';
import CountdownPanel from 'components/CountdownPanel';
// import StatisticsChart from 'components/StatisticsChart';
import StatisticTable from 'components/StatisticTable';
import BooksTable from './BooksTable';
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
          <CountdownPanel
            title="Goals countdown"
            dateTo={training.endDate}
            isStopped={!training.inProgress}
          />
        </Counters>

        <Media
          queries={{
            other: '(max-width: 767px)',
            tablet: breakpoints.tablet,
            desktop: breakpoints.desktop,
          }}
        >
          {({ other, tablet }) => (
            <>
              {other && (
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
                      value: training.books.filter((book) => !book.isCompleted)
                        .length,
                    },
                  ]}
                />
              )}
            </>
          )}
        </Media>

        <BooksListWrapper>
          <Media
            queries={{
              other: '(max-width: 767px)',
              tablet: breakpoints.tablet,
              desktop: breakpoints.desktop,
            }}
          >
            {({ other, tablet }) => (
              <>
                {other && <BooksList />}
                {tablet && <BooksTable />}
              </>
            )}
          </Media>
        </BooksListWrapper>

        {/* {status && (
          <StatisticsChart
            startDate={training.startDate}
            daysAmount={handleDaysDifference(training.startDate)}
            pagesAmount={training.pagesAmount}
            stats={stats}
          />
        )} */}
      </WrapperLeft>

      <WrapperRight>
        <Media
          queries={{
            other: '(max-width: 767px)',
            tablet: breakpoints.tablet,
            desktop: breakpoints.desktop,
          }}
        >
          {({ other, tablet }) => (
            <>
              {tablet && (
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
                      value: training.books.filter((book) => !book.isCompleted)
                        .length,
                    },
                  ]}
                />
              )}
            </>
          )}
        </Media>

        {stats.length ? <StatisticTable items={stats} /> : null}
      </WrapperRight>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.tablet} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Counters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 194px;
  margin: 0 auto;
  margin-bottom: 40px;

  @media ${breakpoints.tablet} {
    flex-direction: row;
    justify-content: space-around;
    height: auto;
    margin: auto;
    margin-bottom: 0;
  }
`;

const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const BooksListWrapper = styled.div`
  margin: 0 auto;
  margin-top: 44px;

  @media ${breakpoints.tablet} {
    width: 928px;
  }

  @media ${breakpoints.desktop} {
    width: 928px;
  }
`;

export default StatisticsPage;
