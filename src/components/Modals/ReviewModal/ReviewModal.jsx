import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
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
}) => (
  <Form>
    <Label>Choose rating of the book</Label>
    <StarRating value={rating} onChange={setRating} />
    <Textarea
      name="resume"
      type="text"
      title="Resume"
      onChange={(e) => setResume(e.target.value)}
      value={text}
    />
    <ButtonList>
      <ButtonListItem>
        <CommonButton type="button" title="Back" onClick={closeModal} />
      </ButtonListItem>
      <ButtonListItem>
        <CommonButton title="Save" variant="accent" onClick={onFormSubmit} />
      </ButtonListItem>
    </ButtonList>
  </Form>
);

const Form = styled.div`
  width: 600px;
  background-color: ${(p) => p.theme.colors.bgSecondary};
  padding: 20px;
`;

const Label = styled.label`
  margin-bottom: 12px;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  margin: 30px 160px;
`;
const ButtonListItem = styled.li`
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
`;

export default ReviewModal;
