import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoints';

const Heading = ({title}) => {
    return (
        <BookListHeading>
            <Cell>Book title</Cell>
            <Cell>Author</Cell>
            <Cell>Year</Cell>
            <Cell>Pages</Cell>
            {title === 'Already read' && (
              <>
                <Cell>Rating</Cell>
                <Cell $mode={title}>Resume</Cell>
              </>
            )}
          </BookListHeading>
    )
}
const BookListHeading = styled.div`
  @media ${breakpoints.tablet} {
    display: flex;
    margin-bottom: 8px;
    padding: 0;
  }

  @media ${breakpoints.desktop} {
  }
`;
const Cell = styled.h3`
  display: block;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: ${(p) => p.theme.colors.tertiary};

  &:first-child {
    ${(props) => {
    switch (props.$mode) {
      case 'Already read':
        return `
              margin-right: 147px;
        `;
      default:
        return `
              margin-right: 299px;
        `;
    }
  }}
     @media ${breakpoints.desktop} {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
             margin-right: 292px;
        `;
          default:
            return `
              margin-right: 571px;
        `;
        }
      }}
    }
  }
  &:nth-child(2) {
    ${(props) => {
      switch (props.$mode) {
        case 'Already read':
          return `
              margin-right: 79px;
        `;
        default:
          return `
               margin-right: 164px;
        `;
      }
}}
     @media ${breakpoints.desktop} {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
             margin-right: 218px;
        `;
          default:
            return `
              margin-right: 339px;
        `;
        }
      }}
    }
  }
  &:nth-child(3) {
    ${(props) => {
      switch (props.$mode) {
        case 'Already read':
          return `
              margin-right: 28px;
        `;
        default:
          return `
               margin-right: 32px;
        `;
      }
}}
     @media ${breakpoints.desktop} {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
             margin-right: 65px;
        `;
          default:
            return `
              margin-right: 72px;
        `;
        }
      }}
    }
  }
  &:nth-child(4) {
    ${(props) => {
      switch (props.$mode) {
        case 'Already read':
          return `
              margin-right: 27px;
        `;
        default:
          return `
               margin-right: 0;
        `;
      }
}}
     @media ${breakpoints.desktop} {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
             margin-right: 102px;
        `;
          default:
            return `
              margin-right: 0;
        `;
        }
      }}
    }
  }
  &:last-child {
    ${(props) => {
      switch (props.$mode) {
        case 'Already read':
          return `
              content-visibility: hidden;
        `;
        default:
          return `
              content-visibility: visible;
        `;
      }
    }}
    @media ${breakpoints.desktop} {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
              width: 150px;
              content-visibility: hidden;
        `;
          default:
            return `
              width: auto;
              content-visibility: visible;
        `;
        }
      }}
    }
  }
`;
export default Heading;