import { useState, useEffect } from 'react';
import { MdMenuBook, MdStarRate } from 'react-icons/md';
import styled from 'styled-components';
import Media from 'react-media';

import { breakpoints } from 'constants/breakpoints';

import { Heading } from './Heading';

import StarratingInfo from 'components/StarratingInfo';
import ReviewModal from 'components/Modals/ReviewModal';
import Modal from 'hoc/Modal';

const BooksList = ({ title, list, onReviewUpdate, onReviewAdd }) => {
  const [isOpen, setOpen] = useState(false);
  const [bookID, setBookID] = useState(null);
  const [reviewID, setReviewID] = useState(null);
  const [rating, setRating] = useState(0);
  const [resume, setResume] = useState('');
  const [ratingError, setRatingError] = useState('');
  const [textError, setTextError] = useState('');

  useEffect(() => {
    setTextError('');
    setRatingError('');
  }, [rating, resume]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (resume.length < 10) {
      return setTextError('Resume must be at least 10 characters');
    }

    if (ratingError < 1) {
      return setRatingError('Choose rating');
    }

    if (reviewID) {
      onReviewUpdate({
        review: {
          rating: rating,
          text: resume,
          id: reviewID,
        },
        bookID: bookID,
      });
      return setOpen(false);
    }

    onReviewAdd({
      review: {
        rating: rating,
        text: resume,
      },
      bookID: bookID,
    });

    setOpen(false);
  };

  const handleOpenModal = (rating, text, reviewID, bookID) => {
    if (reviewID) setReviewID(reviewID);
    if (!reviewID) setReviewID(null);

    if (rating && text) {
      setBookID(bookID);
      setRating(rating);
      setResume(text);
    } else {
      setBookID(bookID);
      setRating(0);
      setResume('');
    }

    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const renderList = () => {
    const elementHTML =
      list &&
      list.map((book) => {
        return (
          <BodyRow key={book._id} $mode={title}>
            <BodyRowWrapper>
              <BodyCell $mode={title}>
                {' '}
                <Icon $mode={title} />
                {book.title}
              </BodyCell>
              <BodyCell $mode={title}>
                <Media
                  query="(max-width: 767px)"
                  render={() => <Span>Author:</Span>}
                />

                {book.author}
              </BodyCell>
              <BodyCell $mode={title}>
                <Media
                  query="(max-width: 767px)"
                  render={() => <Span>Year:</Span>}
                />

                {book.year}
              </BodyCell>
              <BodyCell $mode={title}>
                <Media
                  query="(max-width: 767px)"
                  render={() => <Span>Pages:</Span>}
                />

                {book.pages}
              </BodyCell>
              {title === 'Already read' && (
                <>
                  <BodyCell $mode={title}>
                    <Media
                      query="(max-width: 767px)"
                      render={() => <Span>Rating:</Span>}
                    />
                    <StarratingInfo value={book?.review?.rating} />

                    {/* <StarsIcon />
                      <StarsIcon />
                      <StarsIcon />
                      <StarsIcon />
                      <StarsIcon /> */}
                  </BodyCell>
                  <BodyCell $mode={title}>
                    <Button
                      onClick={() =>
                        handleOpenModal(
                          book?.review?.rating,
                          book?.review?.text,
                          book?.review?._id,
                          book?._id
                        )
                      }
                    >
                      Resume
                    </Button>
                  </BodyCell>
                </>
              )}
            </BodyRowWrapper>
          </BodyRow>
        );
      });

    return elementHTML;
  };

  return (
    <Section>
      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <ReviewModal
            ratingError={ratingError}
            textError={textError}
            rating={rating}
            text={resume}
            closeModal={handleCloseModal}
            setRating={setRating}
            setResume={setResume}
            onFormSubmit={onFormSubmit}
          />
        </Modal>
      )}

      <Title>{title}</Title>

      <Media
        query="(min-width: 768px)"
        render={() => <Heading title={title} />}
      />

      {/* <TableBody>
        {list &&
          list.map((book) => (
            <BodyRow key={book._id} $mode={title}>
              <BodyRowWrapper>
                <BodyCell $mode={title}>
                  {' '}
                  <Icon $mode={title} />
                  {book.title}
                </BodyCell>
                <BodyCell $mode={title}>
                  <Media
                    query="(max-width: 767px)"
                    render={() => <Span>Author:</Span>}
                  />

                  {book.author}
                </BodyCell>
                <BodyCell $mode={title}>
                  <Media
                    query="(max-width: 767px)"
                    render={() => <Span>Year:</Span>}
                  />

                  {book.year}
                </BodyCell>
                <BodyCell $mode={title}>
                  <Media
                    query="(max-width: 767px)"
                    render={() => <Span>Pages:</Span>}
                  />

                  {book.pages}
                </BodyCell>
                {title === 'Already read' && (
                  <>
                    <BodyCell $mode={title}>
                      <Media
                        query="(max-width: 767px)"
                        render={() => <Span>Rating:</Span>}
                      />
                      <StarratingInfo value={book?.review?.rating} />

                      <StarsIcon />
                      <StarsIcon />
                      <StarsIcon />
                      <StarsIcon />
                      <StarsIcon />
                    </BodyCell>
                    <BodyCell $mode={title}>
                      <Button
                        onClick={() =>
                          handleOpenModal(
                            book?.review?.rating,
                            book?.review?.text,
                            book?.review?._id,
                            book?._id
                          )
                        }
                      >
                        Resume
                      </Button>
                    </BodyCell>
                  </>
                )}
              </BodyRowWrapper>
            </BodyRow>
          ))}
      </TableBody> */}

      <TableBody>{list.length ? renderList() : null}</TableBody>
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

const TableBody = styled.ul``;

const BodyRow = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 16px;
  background-color: ${(p) => p.theme.colors.bgSecondary};
  box-shadow: ${(p) => p.theme.shadows.booksItem};
  ${(props) => {
    switch (props.$mode) {
      case 'Already read':
        return `
        padding: 20px 20px 32px 54px;
        `;
      default:
        return `
          padding: 20px 20px 20px 54px;
        `;
    }
  }}

  &:last-child {
    margin-bottom: 0px;
  }

  @media ${breakpoints.tablet} {
    margin-bottom: 8px;
    width: 100%;
    height: 62px;
    padding: 0 20px 0 60px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  @media ${breakpoints.desktop} {
    padding-right: 77px;
  }
`;
const BodyRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${breakpoints.tablet} {
    flex-direction: row;
  }
`;
const Icon = styled(MdMenuBook)`
  position: absolute;
  top: 19px;
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

const BodyCell = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.22;

  &:last-child {
    margin-bottom: 0px;
  }

  &:first-child {
    @media ${breakpoints.tablet} {
      margin: 0 32px 0 0;
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
              width: 124px;
        `;
          default:
            return `
              width: 276px;
        `;
        }
      }}
    }
    @media ${breakpoints.desktop} {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
              width: 157px;
              margin: 0 144px 0 0;
        `;
          default:
            return `
              width: 469px;
              margin: 0 111px 0 0;
        `;
        }
      }}
    }
  }
  &:nth-child(2) {
    @media ${breakpoints.tablet} {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
              width: 88px;
              margin: 0 28px 0 0;
        `;
          default:
            return `
              width: 168px;
              margin: 0 38px 0 0;
        `;
        }
      }}
    }
    @media ${breakpoints.desktop} {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
              width: 88px;
              margin: 0 178px 0 0;
        `;
          default:
            return `
              width: 221px;
              margin: 0 160px 0 0;
        `;
        }
      }}
    }
  }
  &:nth-child(3) {
    @media ${breakpoints.tablet} {
      justify-content: flex-end;
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
              width: 44px;
              margin: 0 28px 0 0;
        `;
          default:
            return `
              width: 41px;
              margin: 0 25px 0 0;
        `;
        }
      }}
    }
    @media ${breakpoints.desktop} {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
              width: 39px;
              margin: 0 65px 0 0;
        `;
          default:
            return `
              width: 34px;
              margin: 0 72px 0 0;
        `;
        }
      }}
    }
  }
  &:nth-child(4) {
    @media ${breakpoints.tablet} {
      justify-content: flex-end;
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
              width: 44px;
              margin: 0 27px 0 0;
             
        `;
          default:
            return `
              width: 44px;
              margin: 0;
        `;
        }
      }}
    }
    @media ${breakpoints.desktop} {
      justify-content: flex-end;
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
              width: 47px;
              margin: 0 102px 0 0;
        `;
          default:
            return `
               width: 44px;
              margin: 0;
        `;
        }
      }}
    }
  }
  &:nth-child(5) {
    @media ${breakpoints.tablet} {
      justify-content: center;
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
              width: 97px;
              margin: 0 32px 0 0;
        `;
          default:
            return ``;
        }
      }}
    }
    @media ${breakpoints.desktop} {
      justify-content: center;
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
              width: 101px;
              margin: 0 60px 0 0;
        `;
          default:
            return ``;
        }
      }}
    }
  }
  &:last-child {
    @media ${breakpoints.tablet} {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
              width: 80px;
              margin: 0;
        `;
          default:
            return ``;
        }
      }}
    }
    @media ${breakpoints.desktop} {
      ${(props) => {
        switch (props.$mode) {
          case 'Already read':
            return `
              width: 130px;
              margin: 0;
        `;
          default:
            return ``;
        }
      }}
    }
  }
  @media ${breakpoints.tablet} {
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
    margin: 0;
  }

  @media ${breakpoints.desktop} {
    width: 130px;
  }
`;

export default BooksList;
