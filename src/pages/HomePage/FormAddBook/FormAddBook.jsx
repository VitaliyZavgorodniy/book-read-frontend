import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

import CommonInput from 'components/UI-kit/inputs/CommonInput';
import CommonButton from 'components/UI-kit/buttons/CommonButton';

const FormAddBook = ({ prediction, onSearch, onCreate }) => {
  const [id, setID] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [pages, setPages] = useState('');

  const debouncedSearch = useCallback(
    debounce((query) => onSearch({ query }), 500),
    []
  );

  const handleSearch = (e) => {
    setID(null);
    setTitle(e.target.value);
    if (e.target.value.length > 3) debouncedSearch(e.target.value);
  };

  const handleResetForm = () => {
    setID(null);
    setTitle('');
    setAuthor('');
    setYear('');
    setPages('');
  };

  const handleSubmit = () => {
    if (id) {
      onCreate({
        id,
      });

      return handleResetForm();
    }

    onCreate({
      title,
      author,
      year,
      pages,
    });
    return handleResetForm();
  };

  const handlePrediction = (book) => {
    setID(book._id);
    setTitle(book.title);
    setAuthor(book.author);
    setYear(book.year);
    setPages(book.pages);
  };

  const renderPrediction = () => {
    const elementHTML = prediction.map((item) => (
      <Item key={item._id} onClick={() => handlePrediction(item)}>
        {item.title} ({item.year}) | {item.author} | {item.pages} pages
      </Item>
    ));

    return elementHTML;
  };

  return (
    <Wrapper>
      <CommonInput title="Book title" value={title} onChange={handleSearch} />
      <CommonInput
        title="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        disabled={id}
      />
      <CommonInput
        title="Publication date"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        disabled={id}
      />
      <CommonInput
        title="Amount of pages"
        value={pages}
        onChange={(e) => setPages(e.target.value)}
        disabled={id}
      />
      <CommonButton title="Add" type="submit" onClick={handleSubmit} />

      {prediction.length && !id ? (
        <Prediction>{renderPrediction()}</Prediction>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const Prediction = styled.ul`
  z-index: 10;
  position: absolute;
  transform: translateY(100%);
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

export default FormAddBook;
