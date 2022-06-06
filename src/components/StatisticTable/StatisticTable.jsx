import styled from 'styled-components';

const StatisticTable = ({ items }) => (
  <Table>
    <thead>
      <StatRow>
        <TableHeaderDecor></TableHeaderDecor>
        <TableHeader>Statistics</TableHeader>
        <TableHeaderDecor></TableHeaderDecor>
      </StatRow>
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
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
  border-collapse: collapse;
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
`
const Pages = styled.span`
  color: ${(p) => p.theme.colors.tertiary};
`;
