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
      <Heading>
        <BlockHeading title="My goals" />
      </Heading>
      <List>{renderScores()}</List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 280px;
  background-color: ${(p) => p.theme.colors.bgSecondary};
  margin: 0 auto;

  @media ${breakpoints.tablet} {
    width: 704px;
    display: flex;
    align-items: baseline;
    padding: 20px 28px 8px 28px;
  }

  @media ${breakpoints.desktop} {
    width: 288px;
    display: block;
    padding: 0;
  }
`;

const Heading = styled.div`
  @media ${breakpoints.tablet} {
    width: 275px;
    margin-right: 100px;
  }
  @media ${breakpoints.desktop} {
    width: 100%;
    margin-right: 0;
  }
`;

const List = styled.ul`
  display: flex;
  padding: 44px 30px;
  justify-content: space-between;

  @media ${breakpoints.tablet} {
    width: 240px;
    justify-content: space-between;
    padding: 0;
  }

  @media ${breakpoints.desktop} {
    width: 100%;
    padding: 48px 0;
    justify-content: space-evenly;
  }
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
    width: 100px;
    height: 60px;
    font-size: 40px;
  }

  @media ${breakpoints.desktop} {
    width: 100px;
    height: 100px;
    font-size: 45px;
  }
`;

const Label = styled.p`
  width: 70px;
  padding: 14px 0;
  color: ${(p) => p.theme.colors.tertiary};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;

  @media ${breakpoints.tablet} {
    width: 100px;
    padding: 4px 0;
    font-size: 11px;
    line-height: 13px;
  }
  @media ${breakpoints.desktop} {
    width: 70px;
    padding: 14px 0;
    font-size: 14px;
    line-height: 17px;
  }
`;

export default GoalsBoard;
