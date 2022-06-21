import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import Media from 'react-media';

import { IoIosStar } from 'react-icons/io';

import StarratingInfo from 'components/StarratingInfo';
import CommonButton from 'components/UI-kit/buttons/CommonButton';

const BookDetails = ({
  id,
  title,
  author,
  year,
  pages,
  isOwned,
  reviews,
  addToLibrary,
}) => {
  const calculateAverageRating = () => {
    const ratingSum = reviews.reduce((acc, { rating }) => acc + rating, 0);
    const averageReating = ratingSum / reviews.length;

    return averageReating.toFixed(1);
  };

  const renderReviews = () =>
    reviews.map(({ _id, rating, text, owner }) => (
      <Review key={_id}>
        <UserWrapper>
          <User>
            {owner.avatarURL ? (
              <UserImage src={owner.avatarURL} />
            ) : (
              <UserCreds>{owner.name[0]}</UserCreds>
            )}
            <UserName>{owner.name}</UserName>
          </User>
          <Rating>
            <StarratingInfo value={rating} />
          </Rating>
        </UserWrapper>

        <ReviewText>{text}</ReviewText>
      </Review>
    ));

  return (
    <Wrapper>
      <Info>
        <Title>{title}</Title>
        <ButtonWrapper>
          <CommonButton
            title="Add to library"
            variant="accent"
            disabled={isOwned}
            onClick={() => addToLibrary({ id })}
          />
          <AverageRating>{calculateAverageRating()}</AverageRating>
        </ButtonWrapper>
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

const AverageRating = styled.div`
  position: static;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  color: ${(p) => p.theme.colors.accent};
  box-shadow: ${(p) => p.theme.shadows.primary};
  font-weight: 700;
  font-size: 20px;
  line-height: 38px;
  margin-left: 10px;

  @media ${breakpoints.tablet} {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 80px;
    height: 80px;
    font-size: 40px;
    line-height: 38px;
  }
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

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  margin-bottom: 10px;
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

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.tablet} {
    flex-direction: row;
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
  color: ${(p) => p.theme.colors.text};
`;

const UserCreds = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 600;
  font-size: 18px;
  line-height: 17px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.lineStat};
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media ${breakpoints.tablet} {
    margin-top: 0;
    margin-left: 20px;
  }
`;

const ReviewText = styled.p`
  margin-top: 15px;
  color: ${(p) => p.theme.colors.text};
`;

export default BookDetails;
