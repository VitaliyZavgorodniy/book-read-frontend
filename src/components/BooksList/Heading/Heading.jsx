import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoints';

export const Heading = ({ title }) => {
  return (
    <BookListHeading>
      <Cell $mode={title}>Book title</Cell>
      <Cell $mode={title}>Author</Cell>
      <Cell $mode={title}>Year</Cell>
      <Cell $mode={title}>Pages</Cell>
      {title === 'Already read' && (
        <>
          <Cell $mode={title}>Rating</Cell>
          <Cell $mode={title}></Cell>
        </>
      )}
    </BookListHeading>
  );
};
const BookListHeading = styled.div`
  @media ${breakpoints.tablet} {
    display: flex;
    margin-bottom: 8px;
  }
  @media ${breakpoints.desktop} {
  }
`;
const Cell = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: ${(p) => p.theme.colors.tertiary};

  &:first-child {
    ${(props) => {
      switch (props.$mode) {
        case 'Already read':
          return `
              width: 216px;
        `;
        default:
          return `
              width: 368px;
        `;
      }
    }}
    @media ${breakpoints.desktop} {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
             width: 361px;
        `;
          default:
            return `
             width: 640px;
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
             width: 116px;
        `;
        default:
          return `
              width: 206px;
        `;
      }
    }}
    @media ${breakpoints.desktop} {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
            width: 266px;
        `;
          default:
            return `
              width: 381px;
        `;
        }
      }}
    }
  }
  &:nth-child(3) {
    justify-content: flex-start;
    ${(props) => {
      switch (props.$mode) {
        case 'Already read':
          return `
              width: 72px;
        `;
        default:
          return `
              width: 66px;
        `;
      }
    }}
    @media ${breakpoints.desktop} {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
             width: 104px;
        `;
          default:
            return `
              width: 106px;
        `;
        }
      }}
    }
  }
  &:nth-child(4) {
    justify-content: flex-start;
    ${(props) => {
      switch (props.$mode) {
        case 'Already read':
          return `
              width: 80px;
        `;
        default:
          return `
               width: 44px;
        `;
      }
    }}
    @media ${breakpoints.desktop} {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
            width: 160px;
        `;
          default:
            return `
              width: 44px;
        `;
        }
      }}
    }
  }
`;
