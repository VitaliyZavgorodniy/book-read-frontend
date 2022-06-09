import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import { Notyf } from 'notyf';

import DateInput from 'components/UI-kit/inputs/DateInput';
import BlockHeading from 'components/UI-kit/containers/BlockHeading';
import GoalsBoard from 'components/GoalsBoard';
import BooksTable from './BooksTable';

import { getTimeDifference } from 'utils/getTimeDifference';
import { timeFormatToDT } from 'utils/timeFormatToDT';

const TrainingPage = ({ library, status, onLoadLibrary, onLoadTraining }) => {
  const navigate = useNavigate();
  const notyf = new Notyf();

  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [booksList, setBooksList] = useState([]);

  const [booksGoal, setBooksGoal] = useState({
    id: 'books',
    label: 'Amount of books',
    value: 0,
  });
  const [daysGoal, setDaysGoal] = useState({
    id: 'days',
    label: 'Amount of days',
    value: 0,
  });

  useEffect(() => {
    if (status) navigate('/statistics');
  }, [status]);

  useEffect(() => {
    onLoadLibrary();
    onLoadTraining();
  }, []);

  useEffect(() => {
    setBooksGoal((state) => ({ ...state, value: booksList.length }));
  }, [booksList]);

  useEffect(() => {
    const difference = getTimeDifference(
      timeFormatToDT(dateFrom),
      timeFormatToDT(dateTo)
    );

    if (difference?.days <= 0 || difference?.days > 31)
      return notyf.error('Days must be more then 1 and less then 31');

    if (difference?.days >= 1) {
      setDaysGoal((state) => ({ ...state, value: difference?.days }));
    }
  }, [dateFrom, dateTo]);

  const handleRemoveBook = (id) => {
    setBooksList((state) => state.filter((item) => item.id !== id));
  };

  return (
    <Wrapper>
      <BlockHeading title="My training" />

      <DateInput value={dateFrom} onChange={setDateFrom} />
      <DateInput value={dateTo} onChange={setDateTo} />

      <GoalsBoard data={[booksGoal, daysGoal]} title="My goals" />

      <BooksTable list={booksList} handleRemove={handleRemoveBook} />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default TrainingPage;
