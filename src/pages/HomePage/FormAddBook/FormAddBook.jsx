import { useState } from 'react';
import styled from 'styled-components';

import CommonInput from 'components/UI-kit/inputs/CommonInput';
import CommonButton from 'components/UI-kit/buttons/CommonButton';

const FormAddBook = ({ onCreate }) => {
  const [id, setID] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('1900');
  const [pages, setPages] = useState('0');

  const handleSubmit = () => {
    if (id) {
      return onCreate({
        id,
      });
    }

    onCreate({
      title,
      author,
      year,
      pages,
    });
  };

  return (
    <Wrapper>
      <CommonInput
        title="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <CommonInput
        title="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <CommonInput
        title="Publication date"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <CommonInput
        title="Amount of pages"
        value={pages}
        onChange={(e) => setPages(e.target.value)}
      />
      <CommonButton title="Add" type="submit" onClick={handleSubmit} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export default FormAddBook;
