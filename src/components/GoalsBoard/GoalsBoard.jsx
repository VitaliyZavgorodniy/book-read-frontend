import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import Heading from 'components/UI-kit/containers/Heading';

const GoalsBoard = ({ data, padding }) => {
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
      <HeadingWrapper>
        <Heading>My goals</Heading>
      </HeadingWrapper>
      <List padding={padding}>{renderScores()}</List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 280px;
  margin: 0 auto;
  background-color: ${(p) => p.theme.colors.bgSecondary};
  box-shadow: ${(p) => p.theme.shadows.booksItem};

  @media ${breakpoints.tablet} {
    display: flex;
    justify-content: space-between;
    width: 704px;
    padding: 20px 43px 26px 42px;
  }

  @media ${breakpoints.desktop} {
    width: 288px;
    display: block;
    padding: 0;
  }
`;

const HeadingWrapper = styled.div`
  @media ${breakpoints.tablet} {
    width: 275px;
    justify-content: space-between;
    /* margin-right: 100px; */
  }
  @media ${breakpoints.desktop} {
    width: 100%;
    margin-right: 0;
  }
`;

const List = styled.ul`
  display: flex;

  padding: ${(p) => (p.padding === 'sm' ? '32px' : '44px')} 0;

  justify-content: space-around;

  @media ${breakpoints.tablet} {
    width: 324px;
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
  width: 63px;
  height: 63px;
  background-color: ${(p) => p.theme.colors.bgLight};
  color: ${(p) =>
    p.accent ? p.theme.colors.accent : p.theme.colors.secondary};
  font-weight: 700;
  font-size: 35px;
  line-height: 38px;
  box-shadow: ${(p) => p.theme.shadows.primary};

  @media ${breakpoints.tablet} {
    width: 100px;
    height: 60px;
    font-size: 40px;
  }

  @media ${breakpoints.desktop} {
    width: 66px;
    height: 66px;
    font-size: 45px;
  }
`;

const Label = styled.p`
  width: 60px;
  padding: 9px 3px 0 3px;
  color: ${(p) => p.theme.colors.tertiary};
  font-weight: 500;
  font-size: 11px;
  line-height: 1.22;
  text-align: center;

  @media ${breakpoints.tablet} {
    width: 100px;
    padding: 9px 0 0;
  }
  @media ${breakpoints.desktop} {
    width: 66px;
    padding: 14px 0;
    font-size: 14px;
    line-height: 17px;
  }
`;

export default GoalsBoard;
