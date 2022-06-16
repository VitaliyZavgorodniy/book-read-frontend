import { useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import Media from 'react-media';

import GoalsBoard from 'components/GoalsBoard';
import CountdownPanel from 'components/CountdownPanel';
import StatisticsChart from 'components/StatisticsChart';
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
      <WrapperUp>
        {/* Counter's section */}
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

        {/* My goals section */}
        <GoalsWrapper>
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
            padding={'sm'}
          />
        </GoalsWrapper>

        {/* BookList section */}
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
      </WrapperUp>
      <WrapperDown>
        {/* Chart section */}
        {training.startDate && (
          <StatisticsChart
            startDate={training.startDate}
            daysAmount={handleDaysDifference(training.startDate)}
            pagesAmount={training.pagesAmount}
            stats={stats}
          />
        )}

        {/* Result-statistic section */}
        <StatisticWrapper>
          {stats.length ? <StatisticTable items={stats} /> : null}
        </StatisticWrapper>
      </WrapperDown>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 40px;
  margin: 0 auto;

  @media ${breakpoints.tablet} {
  }
  @media ${breakpoints.desktop} {
    width: 1248px;
  }
`;
const WrapperUp = styled.div`
  @media ${breakpoints.desktop} {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 329px;
  }
`;
const WrapperDown = styled.div`
  @media ${breakpoints.desktop} {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
  }
`;
const Counters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 194px;
  margin: 0 auto;

  @media ${breakpoints.tablet} {
    width: 612px;
    flex-direction: row;
    height: auto;
    margin: 0 auto;
  }
  @media ${breakpoints.desktop} {
    width: 928px;
    height: 85px;
    margin-right: 320px;
    margin-left: 0;
    padding-left: 137px;
    padding-right: 137px;
    justify-content: space-between;
  }
`;
const GoalsWrapper = styled.div`
  margin-top: 40px;
  @media ${breakpoints.tablet} {
    margin-top: 36px;
  }
  @media ${breakpoints.desktop} {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 0;
  }
`;
const BooksListWrapper = styled.div`
  margin-top: 20px;

  @media ${breakpoints.tablet} {
    width: 704px;
    margin-top: 40px;
    margin-bottom: 32px;
  }

  @media ${breakpoints.desktop} {
    width: 928px;
    margin-top: 44px;
    overflow-y: auto;
  }
`;
const StatisticWrapper = styled.div`
  box-shadow: ${(p) => p.theme.shadows.chartItem};
  margin-top: 40px;

  @media ${breakpoints.tablet} {
    width: 704px;
  }
  @media ${breakpoints.desktop} {
    width: 288px;
    margin-top: 0;
  }
`;

export default StatisticsPage;
