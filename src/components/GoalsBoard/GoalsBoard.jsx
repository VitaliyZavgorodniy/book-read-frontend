import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import BlockHeading from 'components/UI-kit/sections/BlockHeading';

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

  @media ${breakpoints.tablet} {
    max-width: 704px;
  }

  @media ${breakpoints.desktop} {
    max-width: 288px;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  padding: 48px 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;

  &:last-child {
    margin-right: 0px;
  }
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
`;

const Label = styled.p`
  width: 100px;
  padding: 14px;
  color: ${(p) => p.theme.colors.tertiary};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
`;

export default GoalsBoard;
