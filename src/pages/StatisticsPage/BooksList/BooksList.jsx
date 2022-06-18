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

const BooksList = ({ books, onUpdateStats }) => {
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
        <Item key={_id}>
          {isCompleted ? <IconCompleted /> : <Icon />}
          {isCompleted ? null : (
            <ButtonWrapper>
              <IconButton
                onClick={() => handleOpenModal({ _id, pagesRead, pages })}
              >
                <AiOutlinePlus />
              </IconButton>
            </ButtonWrapper>
          )}

          <BookTitle>{title}</BookTitle>

          <Row>
            <Heading>Author</Heading>
            <Text>{author}</Text>
          </Row>

          <Row>
            <Heading>Year</Heading>
            <Text>{year}</Text>
          </Row>

          <Row>
            <Heading>Pages</Heading>
            <Text>{pages}</Text>
          </Row>

          <Row>
            <Heading>Read</Heading>
            <Text>{pagesRead}</Text>
          </Row>
        </Item>
      )
    );

    return elementHTML;
  };

  return (
    <Wrapper>
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

      <List>{books.length ? renderList() : null}</List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 280px;
  margin: 0 auto;
`;

const List = styled.ul`
  width: 100%;
  margin: 0 auto;
`;

const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-left: 34px;
  border-top: 1px solid ${(p) => p.theme.colors.lineStat};

  &:last-child {
    border-bottom: 1px solid ${(p) => p.theme.colors.lineStat};
  }
`;

const BookTitle = styled.h3`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 12px;
`;

const Row = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Heading = styled.div`
  width: 80px;
  color: ${(p) => p.theme.colors.tertiary};
`;

const Text = styled.span`
  color: ${(p) => p.theme.colors.primary};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 0;
`;

const Icon = styled(MdOutlineCheckBoxOutlineBlank)`
  position: absolute;
  top: 20px;
  left: 0px;
  color: ${(p) => p.theme.colors.textLight};
  font-size: 24px;
`;

const IconCompleted = styled(MdOutlineCheckBox)`
  position: absolute;
  top: 20px;
  left: 0px;
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

export default BooksList;
