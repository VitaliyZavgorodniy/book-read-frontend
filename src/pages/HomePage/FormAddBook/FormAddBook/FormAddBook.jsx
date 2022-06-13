import { useState, useEffect, useCallback } from 'react';

import styled from 'styled-components';
import debounce from 'lodash.debounce';

import { breakpoints } from 'constants/breakpoints';

import CommonInput from 'components/UI-kit/inputs/CommonInput';
import CommonButton from 'components/UI-kit/buttons/CommonButton';


const FormAddBook = ({ prediction, onSearch, onCreate, handleClose }) => {
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
    handleClose();
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
             
      <InputList>
        <InputWrapper>
          <CommonInput
            title="Book title"
            placeholder="..."
            value={title}
            onChange={handleSearch}
          />
        </InputWrapper>
        <InputWrapper>
          {' '}
          <CommonInput
            title="Author"
            placeholder="..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            disabled={id}
          />
        </InputWrapper>

        <InputWrapper>
          {' '}
          <CommonInput
            title="Publication date"
            placeholder="..."
            value={year}
            onChange={(e) => setYear(e.target.value)}
            disabled={id}
          />
        </InputWrapper>

        <InputWrapper>
          <CommonInput
            title="Amount of pages"
            placeholder="..."
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            disabled={id}
          />
        </InputWrapper>
      </InputList>
      <ButtonWrapper>
        <CommonButton title="Add" type="submit" onClick={handleSubmit} />
      </ButtonWrapper>

      {prediction.length && title.length >= 3 && !id ? (
        <Prediction>{renderPrediction()}</Prediction>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakpoints.tablet} {
    width: 704px;
  }
  @media ${breakpoints.desktop} {
    width: 1141px;
    margin: 0;
    flex-direction: row;
    justify-content: start;
  }
`;
const InputList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  @media ${breakpoints.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media ${breakpoints.desktop} {
    flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 0;
    margin-right: 48px;
  }
`;
const InputWrapper = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  @media ${breakpoints.tablet} {
    margin-bottom: 0;
    &:first-child {
      width: 100%;
      margin-bottom: 24px;
    }
    &:nth-child(2) {
      width: 336px;
      margin-right: 32px;
    }
    &:nth-child(3) {
      width: 152px;
      margin-right: 32px;
    }
    &:nth-child(4) {
      width: 152px;
    }
    @media ${breakpoints.desktop} {
      margin-bottom: 0;
      &:not(:last-child) {
        margin-right: 16px;
      }
      &:first-child {
        width: 346px;
      }
      &:nth-child(2) {
        width: 134px;
      }
      &:nth-child(3) {
        width: 134px;
      }
      &:nth-child(4) {
        width: 152px;
      }
    }
  }
`;
const ButtonWrapper = styled.div`
  width: 171px;
  @media ${breakpoints.desktop} {
    width: 181px;
  }
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