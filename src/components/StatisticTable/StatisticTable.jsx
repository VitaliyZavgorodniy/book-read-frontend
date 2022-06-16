import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import { DateTime as dt } from 'luxon';

const StatisticTable = ({ items }) => {
  const parseDate = (data) => {
    const parsedDate = dt.fromISO(data);
    return parsedDate.toFormat('dd.MM.yyyy');
  };

  const parseTime = (data) => {
    const parsedDate = dt.fromISO(data);
    return parsedDate.toFormat('HH:mm:ss');
  };

  const renderList = () => {
    const elementHTML = [...items]
      .reverse()
      .splice(0, 10)
      .map(({ _id, date, pages }) => (
        <Item key={_id}>
          <Text>{parseDate(date)}</Text>
          <Text variant="accent" aligment="center">
            {parseTime(date)}
          </Text>
          <Text aligment="right">
            {pages} <Text variant="accent">pages</Text>
          </Text>
        </Item>
      ));

    return elementHTML;
  };

  return (
    <Wrapper>
      <Heading>
        <Title>Statistics</Title>
      </Heading>

      <List>{items.length ? renderList() : <div>No stats</div>}</List>
    </Wrapper>
  );
};

export default StatisticTable;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  background-color: ${(p) => p.theme.colors.bgSecondary};
  padding: 18px 24px 14px;

  @media ${breakpoints.tablet} {
    width: 704px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 232px;
    padding-right: 232px;
  }
  @media ${breakpoints.desktop} {
    width: 288px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 18px 24px 14px;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  &::before {
    content: '';
    flex: 1 1 auto;
    border-bottom: solid 1px ${(p) => p.theme.colors.lineStat};

    @media ${breakpoints.tablet} {
      display: none;
    }

    @media ${breakpoints.desktop} {
      display: flex;
    }
  }

  &::after {
    content: '';
    flex: 1 1 auto;
    border-bottom: solid 1px ${(p) => p.theme.colors.lineStat};
  }
`;

const Title = styled.h4`
  flex: 0 1 auto;
  padding: 0 7px;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;

  @media ${breakpoints.tablet} {
    padding-left: 0;
  }

  @media ${breakpoints.desktop} {
    padding-left: 7px;
  }
`;

const List = styled.ul`
  width: 100%;
  margin-top: 11px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0px;
  }

  & > * {
    flex-basis: calc(100% / 3);
  }
`;

const Text = styled.span`
  color: ${(p) =>
    p.variant === 'accent' ? p.theme.colors.tertiary : p.theme.colors.primary};
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: ${(p) => p.aligment};
`;
