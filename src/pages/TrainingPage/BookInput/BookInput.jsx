import { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import CommonInput from 'components/UI-kit/inputs/CommonInput';

const BookInput = ({ pendingBooks, listedBooks, onClick }) => {
  const [filter, setFilter] = useState('');

  const handleOnClick = (book) => {
    const { _id, title, author, year, pages } = book;

    setFilter('');
    onClick({ _id, title, author, year, pages });
  };

  const filteredBooks = () => {
    const filteredByList = pendingBooks.filter(
      (pendingBook) => !listedBooks.find(({ _id }) => pendingBook._id === _id)
    );

    const filteredByName = filteredByList.filter(({ title }) =>
      title.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredByName;
  };

  const renderBooks = () => {
    const elementHTML = filteredBooks().map((book) => (
      <Item key={book._id} onClick={() => handleOnClick(book)}>
        {book.title} ({book.year}) - {book.pages} pages
      </Item>
    ));

    return elementHTML;
  };

  return (
    <Wrapper>
      <CommonInput
        title="Search for books"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {filteredBooks().length && filter ? <List>{renderBooks()}</List> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const List = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: ${(p) => p.theme.colors.bgPrimary};
  box-shadow: ${(p) => p.theme.shadows.primary};
`;

const Item = styled.li`
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.colors.accent};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default BookInput;
