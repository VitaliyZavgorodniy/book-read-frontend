import { useState } from 'react';
import styled from 'styled-components';
import { timeFormatToString } from 'utils/timeFormatToString';

import Modal from 'hoc/Modal';
import CommonInput from 'components/UI-kit/inputs/CommonInput';
import CommonButton from 'components/UI-kit/buttons/CommonButton';

const BooksList = ({ books, onUpdateStats }) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [statsBook, setStatsBook] = useState(null);
  const [statsPages, setStatsPages] = useState('');

  const handleStatUpdate = () => {
    onUpdateStats({
      bookId: statsBook,
      date: timeFormatToString(new Date()),
      pages: statsPages,
    });

    setStatsPages('');
    setStatsBook(null);
    setOpenModal(false);
  };

  const handleOpenModal = (bookID) => {
    setStatsBook(bookID);
    setOpenModal(true);
  };

  const renderList = () => {
    const elementHTML = books.map((book) => (
      <BodyRow key={book._id}>
        <BodyCell>{book.title}</BodyCell>
        <BodyCell>{book.author}</BodyCell>
        <BodyCell>{book.pagesRead}</BodyCell>
        <BodyCell>
          {book.pagesRead}/{book.pages}
        </BodyCell>
        <BodyCell>
          <button onClick={() => handleOpenModal(book._id)}>Add Stat</button>
          {/* <button onClick={() => handleStatUpdate(book._id)}>Add Stat</button> */}
        </BodyCell>
      </BodyRow>
    ));

    return elementHTML;
  };

  return (
    <Wrapper>
      {isOpenModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <ModalWrapper>
            <CommonInput
              title="Amount of pages"
              value={statsPages}
              onChange={(e) => setStatsPages(e.target.value)}
            />
            <CommonButton
              title="Confirm"
              variant="accent"
              onClick={handleStatUpdate}
            />
          </ModalWrapper>
        </Modal>
      )}

      <Table>
        <TableHead>
          <HeadRow>
            <HeadCell>Book title</HeadCell>
            <HeadCell>Author</HeadCell>
            <HeadCell>Year</HeadCell>
            <HeadCell>Progress</HeadCell>
            <HeadCell />
          </HeadRow>
        </TableHead>
        <TableBody>{books.length ? renderList() : null}</TableBody>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ModalWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
`;

const TableHead = styled.thead``;

const HeadRow = styled.tr``;

const HeadCell = styled.th``;

const TableBody = styled.tbody``;

const BodyRow = styled.tr``;

const BodyCell = styled.td``;

export default BooksList;
