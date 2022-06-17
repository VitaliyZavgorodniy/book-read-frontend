import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import { Notyf } from 'notyf';

import DateInput from 'components/UI-kit/inputs/DateInput';
import BlockHeading from 'components/UI-kit/containers/BlockHeading';
import GoalsBoard from 'components/GoalsBoard';
import BooksList from './BooksList';
import InfoBlock from './InfoBlock';

import { getTimeDifference } from 'utils/getTimeDifference';
import { timeFormatToString } from 'utils/timeFormatToString';
import { timeFormatToDT } from 'utils/timeFormatToDT';
import BookInput from './BookInput';
import CommonButton from 'components/UI-kit/buttons/CommonButton';
import { useDispatch } from 'react-redux';

import { authActions } from 'redux/auth';

const MIN_GOAL_DAYS = 1;
const MAX_GOAL_DAYS = 31;
const MIN_GOAL_BOOKS = 1;

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

  const [endDate, setEndDate] = useState(new Date());
  const [listedBooks, setListedBooks] = useState([]);
  const [goalBooks, setGoalBooks] = useState(0);
  const [goalDays, setGoalDays] = useState(0);

  useEffect(() => {
    if (status) {
      dispatch(authActions.setTrainingStatus(true));
      navigate('/statistics');
    }
  }, [status]);

  useEffect(() => {
    onLoadLibrary();
    onLoadTraining();
  }, []);

  useEffect(() => {
    setGoalBooks(listedBooks.length);
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
    <Wrapper>
      <OptionsBlock>
        <BlockHeading title="My training" />
        <Block>
          <BookInput
            pendingBooks={pendingBooks}
            listedBooks={listedBooks}
            onClick={handleAddBook}
          />

          <ElementWrapper>
            <DateInput
              title="End of training"
              value={endDate}
              onChange={setEndDate}
            />
          </ElementWrapper>
        </Block>

        <ListWrapper>
          {listedBooks.length ? (
            <BooksList list={listedBooks} handleRemove={handleRemoveBook} />
          ) : (
            <InfoBlock />
          )}
        </ListWrapper>

        <ButtonWrapper>
          {goalBooks >= MIN_GOAL_BOOKS &&
          goalDays >= MIN_GOAL_DAYS &&
          goalDays <= MAX_GOAL_DAYS ? (
            <CommonButton
              variant="accent"
              title="Start training"
              onClick={handleStartTraining}
            />
          ) : null}
        </ButtonWrapper>
      </OptionsBlock>

      <BoardWrapper>
        <GoalsBoard
          title="My goals"
          data={[
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
          ]}
        />
      </BoardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 280px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  margin: 0 auto;

  @media ${breakpoints.tablet} {
    max-width: 704px;
  }

  @media ${breakpoints.desktop} {
    max-width: 1280px;
    flex-direction: row;
  }
`;

const OptionsBlock = styled.div`
  display: flex;
  flex-direction: column;
  @media ${breakpoints.desktop} {
    width: 928px;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 10px 0;
  margin-top: 20px;

  @media ${breakpoints.tablet} {
    flex-direction: row;
    align-items: flex-end;
    margin-top: 28px;
  }

  @media ${breakpoints.desktop} {
    margin-top: 24px;
  }
`;

const ButtonWrapper = styled.div`
  width: 200px;
  margin: 0 auto 32px auto;
`;

const ElementWrapper = styled.div`
  margin-bottom: 10px;

  @media ${breakpoints.tablet} {
    margin-bottom: 0;
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 32px;

  @media ${breakpoints.tablet} {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media ${breakpoints.desktop} {
    margin-top: 25px;
  }
`;

const BoardWrapper = styled.div`
  display: block;
  margin-bottom: 32px;

  @media ${breakpoints.tablet} {
    margin-bottom: 40px;
  }

  @media ${breakpoints.desktop} {
    margin-bottom: 0;
  }
`;

export default TrainingPage;
