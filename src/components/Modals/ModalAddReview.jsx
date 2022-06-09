import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import CommonButton from 'components/UI-kit/buttons/CommonButton';
import Textarea from 'components/UI-kit/inputs/Textarea';
import StarRating from 'components/UI-kit/inputs/StarRating';

const ReviewModal = () => {
    const [rating, setRating] = useState(0);
    const [resume, setResume] = useState("");
    const onFormSubmit = (e) => {
    e.preventDefault();
   console.log(`rating: ${rating}, resume: ${resume}`)

    setRating(0);
    setResume("");
  };

const onResumeChange = (e) => {
    const { value } = e.target;
        setResume(value);    
  };
  return (
    <Form onSubmit={onFormSubmit}>
      <Label>Choose rating of the book</Label>    
      <StarRating value={rating} onChange={setRating}/>
      <Textarea
        name="resume"
        type="text"
        title="Resume"
        onChange={onResumeChange}
        value={resume}
      />
      <ButtonList>
        <ButtonListItem>
          <CommonButton type="button" title="Back" />
        </ButtonListItem>
        <ButtonListItem>
                  <CommonButton type="submit" title="Save" variant="accent"  />
        </ButtonListItem>
      </ButtonList>
    </Form>
  );
};
const Form = styled.form`
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
