import styled from 'styled-components';

const BooksList = ({ list, handleRemove }) => {
  const renderList = () => {
    const elementHTML = list.map(({ id, title, author, year, pages }) => (
      <BodyRow key={id}>
        <BodyColumn>{title}</BodyColumn>
        <BodyColumn>{author}</BodyColumn>
        <BodyColumn>{year}</BodyColumn>
        <BodyColumn>{pages}</BodyColumn>
        <BodyColumn>
          <button onClick={() => handleRemove(id)}>remove</button>
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
      <TableBody>{renderList()}</TableBody>
    </Table>
  );
};

const Table = styled.table``;

const TableHead = styled.thead``;

const HeadRow = styled.tr``;

const HeadColumn = styled.th``;

const TableBody = styled.tbody``;

const BodyRow = styled.tr``;

const BodyColumn = styled.td``;

export default BooksList;
