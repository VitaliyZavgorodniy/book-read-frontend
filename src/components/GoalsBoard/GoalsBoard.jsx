import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import Heading from 'components/UI-kit/containers/Heading';

const GoalsBoard = ({ data }) => {
  const length = data.length;

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
      <ContainerHeading>
        <Heading>My goals</Heading>
      </ContainerHeading>
      <List>{renderScores()}</List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 0;
  background-color: ${(p) => p.theme.colors.bgSecondary};
  box-shadow: ${(p) => p.theme.shadows.booksItem};

  @media ${breakpoints.tablet} {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 704px;
    padding: 20px 42px;
  }

  @media ${breakpoints.desktop} {
    display: flex;
    flex-direction: column;
    width: 288px;
    padding: 0;
  }
`;

const ContainerHeading = styled.div`
  width: 100%;

  @media ${breakpoints.tablet} {
    width: 275px;
  }

  @media ${breakpoints.desktop} {
    width: 100%;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 32px 0;

  @media ${breakpoints.tablet} {
    justify-content: space-between;
    width: auto;
    margin-left: 20px;
    padding: 0;
  }

  @media ${breakpoints.desktop} {
    justify-content: space-evenly;
    width: 100%;
    margin: 0;
    padding: 80px 0;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoints.onlyTablet} {
    justify-content: space-between;
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
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
