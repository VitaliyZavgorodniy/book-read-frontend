import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import { Notyf } from 'notyf';

import DateInput from 'components/UI-kit/inputs/DateInput';
import BlockHeading from 'components/UI-kit/containers/BlockHeading';
import GoalsBoard from 'components/GoalsBoard';
import BooksTable from './BooksTable';
import InfoBlock from './InfoBlock';

import { getTimeDifference } from 'utils/getTimeDifference';
import { timeFormatToString } from 'utils/timeFormatToString';
import { timeFormatToDT } from 'utils/timeFormatToDT';
import BookInput from './BookInput';
import CommonButton from 'components/UI-kit/buttons/CommonButton';

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
  const navigate = useNavigate();
  const notyf = new Notyf();

  const [endDate, setEndDate] = useState(new Date());
  const [listedBooks, setListedBooks] = useState([]);
  const [goalBooks, setGoalBooks] = useState(0);
  const [goalDays, setGoalDays] = useState(0);

  useEffect(() => {
    if (status) navigate('/statistics');
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
            <BooksTable list={listedBooks} handleRemove={handleRemoveBook} />
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OptionsBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 928px;
`;

const Block = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px 0;
`;

const ButtonWrapper = styled.div`
  width: 200px;
  margin: 0 auto;
`;

const ElementWrapper = styled.div`
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 25px;
`;

export default TrainingPage;
