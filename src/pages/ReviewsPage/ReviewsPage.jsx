import { useEffect } from 'react';
import styled from 'styled-components';

import Container from 'components/UI-kit/containers/Container';
import BookDetails from './BookDetails';

const ReviewsPage = ({ reviews, loadReviews }) => {
  useEffect(() => {
    loadReviews();
  }, [loadReviews]);

  const renderList = () =>
    reviews.map((book) => (
      <Item key={book._id}>
        <BookDetails {...book} id={book._id} />
      </Item>
    ));

  return (
    <Container>
      <List>{reviews.length ? renderList() : null}</List>
    </Container>
  );
};

const List = styled.ul``;

const Item = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default ReviewsPage;
