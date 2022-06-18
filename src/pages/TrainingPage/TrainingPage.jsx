import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import { Notyf } from 'notyf';

import { authActions } from 'redux/auth';

import DateInput from 'components/UI-kit/inputs/DateInput';
import Heading from 'components/UI-kit/containers/Heading';
import CommonButton from 'components/UI-kit/buttons/CommonButton';
import GoalsBoard from './GoalsBoard';
import BooksList from './BooksList';
import InfoBlock from './InfoBlock';
import BookInput from './BookInput';

import { getTimeDifference } from 'utils/getTimeDifference';
import { timeFormatToString } from 'utils/timeFormatToString';
import { timeFormatToDT } from 'utils/timeFormatToDT';

const MIN_GOAL_DAYS = 1;
const MAX_GOAL_DAYS = 31;
const MIN_GOAL_BOOKS = 1;
const date = new Date();
date.setDate(date.getDate() + 3);

const TrainingPage = ({
  pendingBooks,
  status,
  onLoadLibrary,
  onLoadTraining,
  onStart,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notyf = new Notyf();

  const [endDate, setEndDate] = useState(date);
  const [listedBooks, setListedBooks] = useState([]);
  const [goalBooks, setGoalBooks] = useState(0);
  const [goalDays, setGoalDays] = useState(0);

  const isAvailable =
    goalBooks >= MIN_GOAL_BOOKS &&
    goalDays >= MIN_GOAL_DAYS &&
    goalDays <= MAX_GOAL_DAYS;

  const boardData = [
    {
      id: 'books',
      label: 'Amount of books',
      value: goalBooks,
    },
    {
      id: 'days',
      label: 'Amount of days',
      value: goalDays,
    },
  ];

  useEffect(() => {
    onLoadLibrary();
    onLoadTraining();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (status) {
      dispatch(authActions.setTrainingStatus(true));
      navigate('/statistics');
    }
    // eslint-disable-next-line
  }, [status]);

  useEffect(() => {
    setGoalBooks(listedBooks.length);
    // eslint-disable-next-line
  }, [listedBooks]);

  useEffect(() => {
    const difference = getTimeDifference(
      timeFormatToDT(new Date()),
      timeFormatToDT(endDate)
    );

    if (difference?.days <= MIN_GOAL_DAYS || difference?.days >= MAX_GOAL_DAYS)
      return notyf.error('Days must be more then 1 and less then 31');

    if (difference?.days >= MIN_GOAL_DAYS) {
      setGoalDays(difference?.days);
    }
    // eslint-disable-next-line
  }, [endDate]);

  const handleAddBook = (book) => setListedBooks((state) => [...state, book]);

  const handleRemoveBook = (id) =>
    setListedBooks((state) => state.filter((item) => item._id !== id));

  const handleStartTraining = () => {
    const booksIDs = listedBooks.map((book) => book._id);

    onStart({
      startDate: timeFormatToString(new Date()),
      endDate,
      books: booksIDs,
    });
  };

  return (
    <Section>
      <Container>
        <Heading>My training</Heading>
        <ContainerOptions>
          <BookInput
            pendingBooks={pendingBooks}
            listedBooks={listedBooks}
            onClick={handleAddBook}
          />

          <ContainerInput>
            <DateInput
              title="End of training"
              value={endDate}
              onChange={setEndDate}
            />
          </ContainerInput>
        </ContainerOptions>

        <ContainerList>
          {listedBooks.length ? (
            <BooksList list={listedBooks} handleRemove={handleRemoveBook} />
          ) : (
            <InfoBlock />
          )}
        </ContainerList>

        <ContainerButton>
          <CommonButton
            variant="accent"
            title="Start training"
            onClick={handleStartTraining}
            disabled={!isAvailable}
          />
        </ContainerButton>
      </Container>

      <ContainerBoard>
        <GoalsBoard data={boardData} />
      </ContainerBoard>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.desktop} {
    width: 928px;
  }
`;

const ContainerOptions = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 20px;

  @media ${breakpoints.tablet} {
    flex-direction: row;
    margin-top: 28px;
  }

  @media ${breakpoints.desktop} {
    margin-top: 24px;
  }
`;

const ContainerButton = styled.div`
  width: 200px;
  margin: 40px auto 0;
`;

const ContainerInput = styled.div`
  margin-bottom: 10px;

  @media ${breakpoints.tablet} {
    margin-bottom: 0;
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

const ContainerList = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 23px;
`;

const ContainerBoard = styled.div`
  margin-bottom: 32px;

  @media ${breakpoints.tablet} {
    margin-bottom: 40px;
  }

  @media ${breakpoints.desktop} {
    margin-bottom: 0;
  }
`;

export default TrainingPage;
