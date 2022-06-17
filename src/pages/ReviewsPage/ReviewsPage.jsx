import { useEffect } from 'react';
import styled from 'styled-components';

import BookDetails from './BookDetails';

const ReviewsPage = ({ reviews, loadReviews }) => {
  useEffect(() => {
    loadReviews();
  }, []);

  const renderList = () =>
    reviews.map((book) => (
      <Item key={book._id}>
        <BookDetails {...book} id={book._id} />
      </Item>
    ));

  return (
    <Wrapper>
      <List>{reviews.length ? renderList() : null}</List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
`;

const List = styled.ul``;

const Item = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default ReviewsPage;
