import styled from 'styled-components';

import { IoIosStar } from 'react-icons/io';

import StarratingInfo from 'components/StarratingInfo';

const BookDetails = ({ title, author, year, pages, reviews }) => {
  const calculateAvargeRating = () => {
    console.log(reviews);
    const ratingSum = reviews.reduce((acc, { rating }) => acc + rating, 0);
    console.log({ ratingSum });

    const avargeReating = ratingSum / reviews.length;

    return avargeReating.toFixed(1);
  };

  const renderReviews = () =>
    reviews.map(({ _id, rating, text, owner }) => (
      <Review key={_id}>
        <User>
          <UserImage src={owner.avatarURL} />
          <UserName>{owner.name}</UserName>
          <Rating>
            <StarratingInfo value={rating} />
          </Rating>
        </User>

        <ReviewText>{text}</ReviewText>
      </Review>
    ));

  return (
    <Wrapper>
      <Info>
        <AvargeRating>{calculateAvargeRating()}</AvargeRating>

        <Title>{title}</Title>
        <Data>
          <DataTitle>Author</DataTitle>
          <DataText>{author}</DataText>
        </Data>

        <Data>
          <DataTitle>Year</DataTitle>
          <DataText>{year}</DataText>
        </Data>

        <Data>
          <DataTitle>Pages</DataTitle>
          <DataText>{pages}</DataText>
        </Data>

        <ReviewsList>{renderReviews()}</ReviewsList>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 15px;
  background-color: ${(p) => p.theme.colors.bgSecondary};
  border-radius: 10px;
  box-shadow: ${(p) => p.theme.shadows.block};
`;

const Info = styled.div`
  position: relative;
`;

const AvargeRating = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  color: ${(p) => p.theme.colors.accent};
  box-shadow: ${(p) => p.theme.shadows.primary};
  font-weight: 700;
  font-size: 40px;
  line-height: 38px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  color: ${(p) => p.theme.colors.primary};
`;

const Data = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const DataTitle = styled.p`
  min-width: 80px;
  color: ${(p) => p.theme.colors.textLight};
`;

const DataText = styled.p`
  color: ${(p) => p.theme.colors.secondary};
`;

const ReviewsList = styled.ul`
  margin-top: 20px;
`;

const Review = styled.li`
  padding: 10px;
  background-color: ${(p) => p.theme.colors.bgPrimary};
  border-radius: 5px;
  box-shadow: ${(p) => p.theme.shadows.block};
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

const UserName = styled.span`
  margin-left: 10px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const ReviewText = styled.p`
  margin-top: 15px;
`;

const ActiveStar = styled(IoIosStar)`
  color: ${(p) => p.theme.colors.accent};
  margin-right: 3px;
  font-size: 18px;
`;

export default BookDetails;
