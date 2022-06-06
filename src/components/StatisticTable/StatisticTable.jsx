import styled from 'styled-components';

const StatisticTable = ({ items }) => (
  <Table>
    <thead>
      <tr>
        <TableHeaderDecor></TableHeaderDecor>
        <TableHeader>Statistics</TableHeader>
        <TableHeaderDecor></TableHeaderDecor>
      </tr>
    </thead>

    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td>{item.date}</td>
          <td>{item.time}</td>
          <td>
            {item.pages}
            <span>pages</span>
          </td>
        </tr>
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
  border: 1px solid red;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
 position: relative;
 /* padding: 0 13px 0 12px; */
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.25;
  text-align: center;
  border: 1px solid red;
  border-collapse: collapse;
`;
const TableHeaderDecor = styled(TableHeader)`
&:after{
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(p) => p.theme.colors.lineStat};
    position: absolute;
    top: 50%;
}
`
