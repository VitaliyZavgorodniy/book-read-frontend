import styled from 'styled-components';

import { IoIosStarOutline, IoIosStar } from 'react-icons/io';

const StarratingInfo = ({ value }) => {
  const renderRating = () => {
    return [1, 2, 3, 4, 5].map((item, index) => (
      <Item key={index}>
        {value >= item ? <ActiveStar /> : <UnactiveStar />}
      </Item>
    ));
  };

  return <Wrapper>{renderRating()}</Wrapper>;
};

const Wrapper = styled.div``;

const Item = styled.button`
  margin-right: 4px;
  background-color: transparent;

  &:last-child {
    margin-right: 0;
  }
`;

const ActiveStar = styled(IoIosStar)`
  color: ${(p) => p.theme.colors.accent};
  font-size: 18px;
`;

const UnactiveStar = styled(IoIosStarOutline)`
  color: ${(p) => p.theme.colors.textLight};
  font-size: 18px;
`;

export default StarratingInfo;
