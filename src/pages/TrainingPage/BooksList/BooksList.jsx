import { MdMenuBook, MdOutlineDeleteOutline } from 'react-icons/md';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const BooksList = ({ list, handleRemove }) => {
  const renderList = () => {
    const elementHTML = list.map(({ _id, title, author, year, pages }) => (
      <TrainingListItem key={_id}>
        <Item>
          <IconBook>
            <MdMenuBook />
          </IconBook>
          {title}
        </Item>
        <Item>
          <Span>Author:</Span>
          {author}
        </Item>
        <Item>
          <Span>Year:</Span>
          {year}
        </Item>
        <Item>
          <Span>Pages:</Span>
          {pages}
        </Item>
        <Button onClick={() => handleRemove(_id)}>
          <Icon>
            <MdOutlineDeleteOutline />
          </Icon>
        </Button>
      </TrainingListItem>
    ));

    return elementHTML;
  };

  return (
    <Wrapper>
      <Heading>
        <Cell>Book title</Cell>
        <Cell>Author</Cell>
        <Cell>Year</Cell>
        <Cell>Pages</Cell>
      </Heading>
      <TrainingList>{list?.length > 0 && renderList()}</TrainingList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Heading = styled.div`
  display: none;

  @media ${breakpoints.tablet} {
    display: flex;
    justify-content: space-between;
    padding: 12px 90px 12px 0px;
    border-top: 1px solid ${(p) => p.theme.colors.lineStat};
  }

  @media ${breakpoints.desktop} {
    padding: 12px 120px 12px 0;
  }
`;

const Cell = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${(p) => p.theme.colors.tertiary};

  &:first-child {
    width: 340px;
    @media ${breakpoints.desktop} {
      width: 400px;
    }
  }

  &:nth-child(2) {
    width: 130px;
    @media ${breakpoints.desktop} {
      width: 150px;
    }
  }
`;

const TrainingList = styled.ul`
  border-top: 1px solid ${(p) => p.theme.colors.lineStat};
  border-bottom: 1px solid ${(p) => p.theme.colors.lineStat};

  @media ${breakpoints.tablet} {
    max-height: 172px;
    overflow-y: scroll;
  }

  @media ${breakpoints.desktop} {
    padding: 20px 0;
  }
`;

const TrainingListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 34px;
  border-bottom: 1px solid ${(p) => p.theme.colors.lineStat};

  @media ${breakpoints.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px 12px 40px;
  }

  @media ${breakpoints.desktop} {
    padding: 0 20px 0 36px;
    border-bottom: none;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

const Item = styled.div`
  position: relative;
  font-weight: 500;
  color: ${(p) => p.theme.colors.primary};

  &:first-child {
    @media ${breakpoints.tablet} {
      width: 260px;
    }
    @media ${breakpoints.desktop} {
      width: 350px;
    }
  }

  &:nth-child(2) {
    @media ${breakpoints.tablet} {
      width: 120px;
    }
    @media ${breakpoints.desktop} {
      width: 150px;
    }
  }

  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 15px;
    &:not(:nth-last-child(2)) {
      margin-bottom: 12px;
    }
  }

  @media ${breakpoints.tablet} {
    font-size: 14px;
    line-height: 17px;
  }
`;

const Span = styled.span`
  display: inline-block;
  width: 46px;
  margin-right: 30px;
  color: ${(p) => p.theme.colors.tertiary};

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

const IconBook = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: -34px;
  width: 22px;
  height: 17px;
  color: ${(p) => p.theme.colors.textLight};
  font-size: 18px;
`;

const Icon = styled.span`
  color: ${(p) => p.theme.colors.textLight};
  font-size: 18px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;

  @media (max-width: 767px) {
    position: absolute;
    top: 20px;
    right: 0;
  }
`;

export default BooksList;
