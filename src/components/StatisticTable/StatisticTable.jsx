import styled from 'styled-components';
import Media from 'react-media';

import { breakpoints } from 'constants/breakpoints';

const StatisticTable = ({ items }) => (
  <Table>
    <thead>
      <Media
        queries={{
          medium: '(min-width: 768px) and (max-width: 1279px)',
        }}
      >
        {(matches) =>
          matches.medium ? (
            <StatRow>
              <TableHeader>Statistics</TableHeader>
              <TableHeaderDecor></TableHeaderDecor>
              <TableHeaderDecor></TableHeaderDecor>
            </StatRow>
          ) : (
            <StatRow>
              <TableHeaderDecor></TableHeaderDecor>
              <TableHeader>Statistics</TableHeader>
              <TableHeaderDecor></TableHeaderDecor>
            </StatRow>
          )
        }
      </Media>
     
    </thead>

    <tbody>
      {items.map((item) => (
        <StatRowBody key={item.id}>
          <StatColumn>{item.date}</StatColumn>
          <StatColumnLight>{item.time}</StatColumnLight>
          <StatColumnPages>
            {item.pages}
            <Pages>&nbsp;pages</Pages>
          </StatColumnPages>
        </StatRowBody>
      ))}
    </tbody>
  </Table>
);

export default StatisticTable;

const Table = styled.table`
  width: 240px;
  margin-left: auto;
  margin-right: auto;
  color: ${(p) => p.theme.colors.primary};
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  position: relative;
  padding: 0 13px 0 12px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.25;
  text-align: center;
  border-collapse: collapse;

  @media ${breakpoints.tablet} {
    padding: 0;
     text-align: start;
  }
`;
const TableHeaderDecor = styled(TableHeader)`
  padding: 0;
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(p) => p.theme.colors.lineStat};
    position: absolute;
    top: 50%;
  }
`;
const StatRow = styled.tr`
  margin-bottom: 4px;
`;
const StatRowBody = styled(StatRow)`
  font-size: 14px;
  line-height: 1.22;
`;
const StatColumn = styled.td``;
const StatColumnLight = styled(StatColumn)`
  text-align: center;
  color: ${(p) => p.theme.colors.tertiary};
`;
const StatColumnPages = styled.td`
  text-align: end;
`;
const Pages = styled.span`
  color: ${(p) => p.theme.colors.tertiary};
`;
