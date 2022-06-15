import React from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import CommonButton from 'components/UI-kit/buttons/CommonButton';
import Textarea from 'components/UI-kit/inputs/Textarea';
import StarRating from 'components/UI-kit/inputs/StarRating';

const ReviewModal = ({
  rating,
  text,
  closeModal,
  setRating,
  setResume,
  onFormSubmit,
  ratingError,
  textError,
}) => (
  <Form>
    <Label>Choose rating of the book</Label>

    <StarRating value={rating} onChange={setRating} />
    {ratingError ? <Error>{ratingError}</Error> : null}

    <Textarea
      name="resume"
      type="text"
      title="Resume"
      error={textError}
      onChange={(e) => setResume(e.target.value)}
      value={text}
    />
    <ButtonBlock>
      <BtnWrapper>
        <CommonButton title="Back" onClick={closeModal} />
      </BtnWrapper>
      <BtnWrapper>
        <CommonButton title="Save" variant="accent" onClick={onFormSubmit} />
      </BtnWrapper>
    </ButtonBlock>
  </Form>
);

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  background-color: ${(p) => p.theme.colors.bgSecondary};
  padding: 20px;

  @media ${breakpoints.tablet} {
    width: 608px;
  }
`;

const Label = styled.h2`
  margin-bottom: 12px;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 28px 0 20px;
`;

const BtnWrapper = styled.div`
  width: 97px;
  margin-right: 28px;

  @media ${breakpoints.tablet} {
    width: 130px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Error = styled.p`
  padding: 5px 0;
  color: ${(p) => p.theme.colors.error};
`;

export default ReviewModal;
