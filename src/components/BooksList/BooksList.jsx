import { MdMenuBook, MdStarRate } from 'react-icons/md';
import styled from 'styled-components';
import Media from 'react-media';

import { breakpoints } from 'constants/breakpoints';

import { Heading } from './Heading';

const BooksList = ({ title, list }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Media query="(min-width: 768px)" render={() => <Heading />} />
      <List>
        {list &&
          list.map((book) => (
            <Item key={book._id}>
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

const Section = styled.div`
  width: 280px;
  margin: 0 auto;
  padding-top: 20px;

  @media ${breakpoints.tablet} {
    width: 704px;
    padding-top: 40px;
  }
  @media ${breakpoints.desktop} {
    width: 1248px;
    padding-top: 32px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 19px;
  line-height: 23px;
  color: ${(p) => p.theme.colors.primary};

  @media ${breakpoints.desktop} {
    margin-bottom: 24px;
  }
`;
const StarsIcon = styled(MdStarRate)`
  width: 17px;
  height: 17px;
  color: orange;
`;

const List = styled.ul`
  display: block;
`;

const Item = styled.li`
  position: relative;
  margin-bottom: 16px;
  padding: 20px 20px 28px 54px;
  background-color: ${(p) => p.theme.colors.bgSecondary};
  box-shadow: ${(p) => p.theme.shadows.booksItem};

  &:last-child {
    margin-bottom: 0px;
  }

  @media ${breakpoints.tablet} {
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* justify-content: start; */
    align-items: center;
    width: auto;
    height: 62px;
    padding: 11px 20px 11px 60px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  @media ${breakpoints.desktop} {
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
          color: #A6ABB9;
        `;
    }
  }}
`;

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.22;

  &:last-child {
    margin-bottom: 0px;
  }

  @media ${breakpoints.tablet} {
    max-width: 228px;
    margin-bottom: 0px;
    font-size: 14px;

    &:first-child {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
              width: 124px;
              margin-right: 32px;
        `;
          default:
            return `
              width: 276px;
              margin-right: 32px;
        `;
        }
      }}
    }
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

  @media ${breakpoints.desktop} {
    width: 127px;
  }
`;

export default BooksList;
