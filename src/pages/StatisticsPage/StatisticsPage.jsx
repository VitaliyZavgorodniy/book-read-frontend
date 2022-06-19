import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import Media from 'react-media';

import { authActions } from 'redux/auth';

import GoalsBoard from 'components/GoalsBoard';
import CountdownPanel from 'components/CountdownPanel';
import StatisticsChart from 'components/StatisticsChart';
import StatisticTable from 'components/StatisticTable';
import BooksTable from './BooksTable';
import BooksList from './BooksList';
import TrainingCompleteModal from 'components/Modals/TrainingCompleteModal';
import BookCompletedModal from 'components/Modals/BookCompletedModal';

import { getCurrentEndYearDate } from 'utils/getCurrentEndYearDate';
import { getTimeDifference } from 'utils/getTimeDifference';

import { timeFormatToDT } from 'utils/timeFormatToDT';

const StatisticsPage = ({ status, training, stats, onLoadTraining }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    onLoadTraining();
  }, []);

  useEffect(() => {
    if (!status) dispatch(authActions.setTrainingStatus(false));
    if (status) dispatch(authActions.setTrainingStatus(true));
  }, [status]);

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

  const dataGoals = [
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
      value: training.books.filter((book) => !book.isCompleted).length,
    },
  ];

  return (
    <Container>
      <TrainingCompleteModal />
      <BookCompletedModal />

      <ContainerLeft>
        <ContainerCounters>
          <CountdownPanel
            title="Years countdown"
            dateTo={getCurrentEndYearDate()}
          />
          <CountdownPanel
            title="Goals countdown"
            dateTo={training.endDate}
            isStopped={!training.inProgress}
          />
        </ContainerCounters>

        <Media
          query={breakpoints.maxDesktop}
          render={() => (
            <ContainerGoals>
              <GoalsBoard data={dataGoals} />
            </ContainerGoals>
          )}
        />

        <ContainerBooks>
          <Media
            queries={{
              other: breakpoints.maxTablet,
              tablet: breakpoints.tablet,
            }}
          >
            {({ other, tablet }) => (
              <>
                {other && <BooksList />}
                {tablet && <BooksTable />}
              </>
            )}
          </Media>
        </ContainerBooks>

        {training.startDate && (
          <ContainerStatistics>
            <StatisticsChart
              startDate={training.startDate}
              daysAmount={handleDaysDifference(training.startDate)}
              pagesAmount={training.pagesAmount}
              stats={stats}
            />
          </ContainerStatistics>
        )}
      </ContainerLeft>

      <ContainerRight>
        <Media
          query={breakpoints.desktop}
          render={() => (
            <ContainerGoals>
              <GoalsBoard data={dataGoals} />
            </ContainerGoals>
          )}
        />

        {stats.length ? (
          <ContainerStats>
            <StatisticTable items={stats} />
          </ContainerStats>
        ) : null}
      </ContainerRight>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media ${breakpoints.tablet} {
    max-width: 768px;
    padding: 0 32px;
  }

  @media ${breakpoints.desktop} {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1280px;
    padding: 0 16px;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${breakpoints.tablet} {
    width: 704px;
  }

  @media ${breakpoints.desktop} {
    width: 928px;
  }
`;

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerCounters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 194px;

  @media ${breakpoints.tablet} {
    flex-direction: row;
    height: auto;
    padding: 0 46px;
  }

  @media ${breakpoints.desktop} {
    padding: 0 137px;
  }
`;

const ContainerStatistics = styled.div`
  margin-top: 30px;

  @media ${breakpoints.desktop} {
    margin-top: 40px;
  }
`;

const ContainerGoals = styled.div`
  margin-top: 40px;

  @media ${breakpoints.tablet} {
    margin-top: 36px;
  }

  @media ${breakpoints.desktop} {
    margin-top: 0;
  }
`;

const ContainerBooks = styled.div`
  width: 100%;
  margin-top: 20px;

  @media ${breakpoints.tablet} {
    margin-top: 40px;
  }
`;

const ContainerStats = styled.div`
  width: 100%;
  margin-top: 30px;

  @media ${breakpoints.tablet} {
    width: 368px;
    margin-top: 40px;
  }

  @media ${breakpoints.desktop} {
    width: 100%;
    margin-top: 40px;
  }
`;

export default StatisticsPage;
