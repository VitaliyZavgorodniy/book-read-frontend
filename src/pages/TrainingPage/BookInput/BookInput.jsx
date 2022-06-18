import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { AiFillCaretDown } from 'react-icons/ai';

import CommonInput from 'components/UI-kit/inputs/CommonInput';

const BookInput = ({ pendingBooks, listedBooks, onClick }) => {
  const [filter, setFilter] = useState('');
  const [isExpanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        setFilter('');
        setExpanded(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleList = () => {
    setFilter('');
    setExpanded(!isExpanded);
  };

  const handleOnClick = (book) => {
    const { _id, title, author, year, pages } = book;

    setFilter('');
    onClick({ _id, title, author, year, pages });
  };

  const filteredByList = (list) => {
    return list.filter(
      (book) => !listedBooks.find(({ _id }) => book._id === _id)
    );
  };

  const filteredByName = (list) => {
    return list.filter(({ title }) =>
      title.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredBooks = () => {
    const booksList = filteredByList(pendingBooks);
    const filtered = filteredByName(booksList);

    return filtered;
  };

  const renderBooks = (list) => {
    const elementHTML = list.slice(0, 6).map((book) => (
      <Item key={book._id} onClick={() => handleOnClick(book)}>
        {book.title} ({book.year}) - {book.pages} pages
      </Item>
    ));

    return elementHTML;
  };

  return (
    <Container>
      <CommonInput
        title="Search for books"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {filteredByList(pendingBooks).length ? (
        <Button onClick={toggleList} />
      ) : null}

      {filteredByList(pendingBooks).length && isExpanded ? (
        <List>{renderBooks(filteredByList(pendingBooks))}</List>
      ) : null}

      {filteredBooks(pendingBooks).length && filter ? (
        <List>{renderBooks(filteredBooks(pendingBooks))}</List>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const List = styled.ul`
  position: absolute;
  left: 0;
  top: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: ${(p) => p.theme.colors.bgPrimary};
  box-shadow: ${(p) => p.theme.shadows.primary};
  z-index: 2;
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

const Button = styled(AiFillCaretDown)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  transition: ${(p) => p.theme.animations.primary} color;

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.colors.accent};
  }
`;

export default BookInput;
