import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import BlockHeading from 'components/UI-kit/containers/BlockHeading';

const GoalsBoard = ({ data }) => {
  const renderScores = () => {
    const elementHTML = data.map(({ id, label, value, accent }) => (
      <Item key={id}>
        <Value accent={accent}>{value}</Value>
        <Label>{label}</Label>
      </Item>
    ));

    return elementHTML;
  };

  return (
    <Wrapper>
      <BlockHeading title="My goals" />
      <List>{renderScores()}</List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 280px;
  background-color: ${(p) => p.theme.colors.bgSecondary};

  @media ${breakpoints.tablet} {
    width: 704px;
  }

  @media ${breakpoints.laptop} {
    width: 288px;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 48px 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Value = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: ${(p) => p.theme.colors.bgLight};
  color: ${(p) =>
    p.accent ? p.theme.colors.accent : p.theme.colors.secondary};
  font-weight: 700;
  font-size: 45px;
  line-height: 38px;
  box-shadow: ${(p) => p.theme.shadows.primary};

  @media ${breakpoints.tablet} {
    width: 704px;
  }

  @media ${breakpoints.laptop} {
    width: 66px;
    height: 66px;
    font-weight: 700;
    font-size: 36px;
    line-height: 38px;
  }
`;

const Label = styled.p`
  width: 100px;
  padding: 14px 0;
  color: ${(p) => p.theme.colors.tertiary};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;

  @media ${breakpoints.tablet} {
    width: 704px;
  }

  @media ${breakpoints.laptop} {
    width: 66px;
  }
`;

export default GoalsBoard;
