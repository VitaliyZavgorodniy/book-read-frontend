import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import DateInput from 'components/UI-kit/inputs/DateInput';
import BlockHeading from 'components/UI-kit/sections/BlockHeading';
import GoalsBoard from 'components/GoalsBoard';
import BooksTable from './BooksTable';

import { getTimeDifference } from 'utils/getTimeDifference';
import { timeFormatToDT } from 'utils/timeFormatToDT';

const TEST_LIST = [
  {
    id: '1',
    title: 'Scrum. A  revolutionary method...',
    author: 'Jeff Sutherland',
    year: '2014',
    pages: '15',
  },
  {
    id: '2',
    title: 'Deadline. A novel about project  ...',
    author: 'Tom DeMarko',
    year: '2006',
    pages: '188',
  },
  {
    id: '3',
    title: '5 Defects of the team.  Proverbs about  ...',
    author: 'Patrick Lencioni',
    year: '2011',
    pages: '125',
  },
  {
    id: '4',
    title: 'Scrum. A  revolutionary method...',
    author: 'Jeff Sutherland',
    year: '2014',
    pages: '15',
  },
  {
    id: '5',
    title: 'Deadline. A novel about project  ...',
    author: 'Tom DeMarko',
    year: '2006',
    pages: '188',
  },
  {
    id: '6',
    title: '5 Defects of the team.  Proverbs about  ...',
    author: 'Patrick Lencioni',
    year: '2011',
    pages: '125',
  },
  {
    id: '7',
    title: '5 Defects of the team.  Proverbs about  ...',
    author: 'Patrick Lencioni',
    year: '2011',
    pages: '125',
  },
];

const TrainingPage = () => {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [booksList, setBooksList] = useState(TEST_LIST);

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
    setBooksGoal((state) => ({ ...state, value: booksList.length }));
  }, [booksList]);

  useEffect(() => {
    const difference = getTimeDifference(
      timeFormatToDT(dateFrom),
      timeFormatToDT(dateTo)
    );

    if (difference?.days <= 0 || difference?.days > 31)
      return console.error('Days must be more then 1 and less then 31');

    if (difference?.days >= 1) {
      setDaysGoal((state) => ({ ...state, value: difference?.days }));
    }
  }, [dateFrom, dateTo]);

  const handleRemoveBook = (id) => {
    setBooksList((state) => state.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>TrainingPage</h1>
      <BlockHeading title="My training" />

      <DateInput value={dateFrom} onChange={setDateFrom} />
      <DateInput value={dateTo} onChange={setDateTo} />

      <GoalsBoard data={[booksGoal, daysGoal]} title="My goals" />

      <BooksTable list={booksList} handleRemove={handleRemoveBook} />
    </div>
  );
};

export default TrainingPage;
