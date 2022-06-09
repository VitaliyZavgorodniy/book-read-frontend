import { MdMenuBook, MdOutlineDeleteOutline } from 'react-icons/md';
import styled from 'styled-components';

const BooksTable = ({ list, handleRemove }) => {
  const renderList = () => {
    const elementHTML = list.map(({ id, title, author, year, pages }) => (
      <BodyRow key={id}>
        <BodyColumn>
          <Icon>
            <MdMenuBook />
          </Icon>
          {title}
        </BodyColumn>
        <BodyColumn>{author}</BodyColumn>
        <BodyColumn>{year}</BodyColumn>
        <BodyColumn>{pages}</BodyColumn>
        <BodyColumn>
          <Button onClick={() => handleRemove(id)}>
            <Icon>
              <MdOutlineDeleteOutline />
            </Icon>
          </Button>
        </BodyColumn>
      </BodyRow>
    ));

    return elementHTML;
  };

  return (
    <Table>
      <TableHead>
        <HeadRow>
          <HeadColumn>Book title</HeadColumn>
          <HeadColumn>Author</HeadColumn>
          <HeadColumn>Year</HeadColumn>
          <HeadColumn>Pages</HeadColumn>

          <HeadColumn />
        </HeadRow>
      </TableHead>
      <TableBody>{list?.length > 0 && renderList()}</TableBody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
`;

const TableHead = styled.thead`
  padding: 12px 0;
  border-top: 1px solid ${(p) => p.theme.colors.border};
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
`;

const HeadColumn = styled.th`
  text-align: left;
  color: ${(p) => p.theme.colors.tertiary};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

const HeadRow = styled.tr``;

const TableBody = styled.tbody`
  height: 172px;
  overflow-y: scroll;
`;

const BodyRow = styled.tr`
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

const BodyColumn = styled.td`
  vertical-align: middle;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

const Icon = styled.span`
  color: ${(p) => p.theme.colors.textLight};
  font-size: 18px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export default BooksTable;
