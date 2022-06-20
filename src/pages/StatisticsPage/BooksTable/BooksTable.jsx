import { useState } from 'react';
import styled from 'styled-components';

import { AiOutlinePlus } from 'react-icons/ai';
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from 'react-icons/md';

import Modal from 'hoc/Modal';
import CommonInput from 'components/UI-kit/inputs/CommonInput';
import CommonButton from 'components/UI-kit/buttons/CommonButton';
import IconButton from 'components/UI-kit/buttons/IconButton';

import { timeFormatToString } from 'utils/timeFormatToString';

const BooksTable = ({ books, onUpdateStats }) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [statsBook, setStatsBook] = useState(null);
  const [statsPages, setStatsPages] = useState('1');
  const [pagesError, setPagesError] = useState('');

  const handleStatUpdate = () => {
    if (
      Number(statsPages) < 1 ||
      Number(statsPages) > statsBook.pages - statsBook.pagesRead
    ) {
      return setPagesError('Invalid pages amount');
    }

    onUpdateStats({
      bookId: statsBook._id,
      date: timeFormatToString(new Date()),
      pages: statsPages,
    });

    setStatsPages('');
    setStatsBook(null);
    setOpenModal(false);
  };

  const handleOpenModal = (bookData) => {
    setStatsBook(bookData);
    setOpenModal(true);
  };

  const renderList = () => {
    const elementHTML = books.map(
      ({ _id, isCompleted, title, author, year, pagesRead, pages }) => (
        <BodyRow key={_id}>
          <BodyCell>{isCompleted ? <IconCompleted /> : <Icon />}</BodyCell>
          <BodyCell>{title}</BodyCell>
          <BodyCell>{author}</BodyCell>
          <BodyCell align="right">{year}</BodyCell>
          <BodyCell>{isCompleted ? null : `${pagesRead} / ${pages}`}</BodyCell>
          <BodyCell>
            {isCompleted ? null : (
              <IconButton
                onClick={() => handleOpenModal({ _id, pagesRead, pages })}
              >
                <AiOutlinePlus />
              </IconButton>
            )}
          </BodyCell>
        </BodyRow>
      )
    );

    return elementHTML;
  };

  return (
    <>
      {isOpenModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <ModalWrapper>
            <Title>
              Training results (Left: {statsBook.pages - statsBook.pagesRead})
            </Title>
            <ItemWrapper>
              <CommonInput
                type="number"
                title="Amount of pages"
                error={pagesError}
                value={statsPages}
                placeholer="1"
                onChange={(e) => setStatsPages(e.target.value)}
              />
            </ItemWrapper>
            <ItemWrapper>
              <CommonButton
                title="Confirm"
                variant="accent"
                onClick={handleStatUpdate}
              />
            </ItemWrapper>
          </ModalWrapper>
        </Modal>
      )}

      <Table>
        <TableHead>
          <HeadRow>
            <HeadCell colSpan={2}>Book title</HeadCell>
            <HeadCell>Author</HeadCell>
            <HeadCell align="right">Year</HeadCell>
            <HeadCell colSpan={2}>Progress</HeadCell>
          </HeadRow>
        </TableHead>
        <TableBody>{books.length ? renderList() : null}</TableBody>
      </Table>
    </>
  );
};

const Table = styled.table`
  width: 100%;
  
`;

const TableHead = styled.thead`
  width: 100%;
`;

const HeadRow = styled.tr`
  border-top: 1px solid ${(p) => p.theme.colors.error};
`;

const HeadCell = styled.th`
  text-align: left;
  border-top: 1px solid ${(p) => p.theme.colors.lineStat};
  border-bottom: 1px solid ${(p) => p.theme.colors.lineStat};
  padding: 12px 0;
  color: ${(p) => p.theme.colors.tertiary};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

const TableBody = styled.tbody``;

const BodyRow = styled.tr``;

const BodyCell = styled.td`
  vertical-align: middle;
  padding: 10px 0;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

const Icon = styled(MdOutlineCheckBoxOutlineBlank)`
  color: ${(p) => p.theme.colors.textLight};
  font-size: 24px;
`;

const IconCompleted = styled(MdOutlineCheckBox)`
  color: ${(p) => p.theme.colors.accent};
  font-size: 24px;
`;

const ModalWrapper = styled.div`
  background-color: ${(p) => p.theme.colors.bgSecondary};
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`;

const ItemWrapper = styled.div`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default BooksTable;
