import { MdMenuBook, MdStarRate } from 'react-icons/md';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const BooksList = ({ title, books }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Heading>
        <Cell>Book title</Cell>
        <Cell>Author</Cell>
        <Cell>Year</Cell>
        <Cell>Pages</Cell>
        {title === 'Already read' && <Cell>Rating</Cell>}
      </Heading>
      <List>
        {books &&
          books.map((book) => (
            <Item key={book.id}>
              <Icon $mode={title} />
              <Paragraph>{book.title}</Paragraph>
              <Paragraph>
                <Span>Author:</Span>
                {book.author}
              </Paragraph>
              <Paragraph>
                <Span>Year:</Span>
                {book.year}
              </Paragraph>
              <Paragraph>
                <Span>Pages:</Span>
                {book.pages}
              </Paragraph>
              {title === 'Already read' && (
                <>
                  <Paragraph>
                    <Span>Rating:</Span>
                    <StarsIcon />
                    <StarsIcon />
                    <StarsIcon />
                    <StarsIcon />
                    <StarsIcon />
                  </Paragraph>
                  <Paragraph>
                    <Button>Resume</Button>
                  </Paragraph>
                </>
              )}
            </Item>
          ))}
      </List>
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 20px;

  @media ${breakpoints.tablet} {
    margin-bottom: 40px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 19px;
  line-height: 23px;
  color: ${(p) => p.theme.colors.primary};

  @media ${breakpoints.laptop} {
    margin-bottom: 24px;
  }
`;

const Heading = styled.div`
  display: none;

  @media ${breakpoints.tablet} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    padding: 0 12px 0 54px;
  }

  @media ${breakpoints.laptop} {
    padding: 0 77px 0 54px;
  }
`;

const StarsIcon = styled(MdStarRate)`
  width: 17px;
  height: 17px;
  color: orange;
`;

const Cell = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: ${(p) => p.theme.colors.tertiary};

  &:first-child {
    width: 250px;
  }

  &:nth-child(2) {
    width: 100px;
  }
`;

const List = styled.ul`
  display: block;
`;

const Item = styled.li`
  position: relative;
  width: 280px;
  margin-bottom: 16px;
  padding: 20px 46px 28px 54px;
  box-shadow: ${(p) => p.theme.shadows.booksItem};

  &:last-child {
    margin-bottom: 0px;
  }

  @media ${breakpoints.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 62px;
    padding: 11px 12px 11px 54px;
  }

  @media ${breakpoints.laptop} {
    padding: 11px 77px 11px 54px;
  }
`;

const Icon = styled(MdMenuBook)`
  position: absolute;
  top: 20px;
  left: 14px;
  width: 34px;
  height: 24px;
  ${(props) => {
    switch (props.$mode) {
      case 'Reading now':
        return `
          color: #FF6B08;
        `;
      default:
        return `
          color: grey;
        `;
    }
  }}
`;

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;

  &:last-child {
    margin-bottom: 0px;
  }

  @media ${breakpoints.tablet} {
    max-width: 228px;
    margin-bottom: 0px;
    font-size: 14px;
  }
`;

const Span = styled.span`
  display: inline-flex;
  width: 46px;
  margin-right: 30px;
  color: ${(p) => p.theme.colors.tertiary};

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

const Button = styled.button`
  display: block;
  width: 127px;
  height: 40px;
  margin: 0 auto;
  font-size: 14px;
  color: ${(p) => p.theme.colors.bgLight};
  background-color: ${(p) => p.theme.colors.heading};
  box-shadow: ${(p) => p.theme.shadows.button};
  cursor: pointer;

  @media ${breakpoints.tablet} {
    width: 80px;
  }

  @media ${breakpoints.laptop} {
    width: 127px;
  }
`;

export default BooksList;
