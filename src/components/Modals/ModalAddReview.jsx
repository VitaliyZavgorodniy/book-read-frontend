import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { breakpoints } from 'constants/breakpoints';
import CommonButton from 'components/UI-kit/buttons/CommonButton';
import Textarea from 'components/UI-kit/inputs/Textarea';
import StarRating from 'components/UI-kit/inputs/StarRating';

const ModalAddReview = ({ onClose }) => {
    const [rating, setRating] = useState(0);
    const [resume, setResume] = useState("");
    const onFormSubmit = (e) => {
    e.preventDefault();
   console.log(`rating: ${rating}, resume: ${resume}`)

    setRating(0);
      setResume("");
      onClose();
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
          <CommonButton type="button" title="Back"  onClick={onClose}/>
        </ButtonListItem>
        <ButtonListItem>
          <CommonButton type="submit" title="Save"  variant="accent"  />
        </ButtonListItem>
      </ButtonList>
      </Form>
     
  );
};

const Form = styled.form`
width: 100%;
padding: 20px;
max-width: 280px;
max-height: 395px;
padding: 20px 20px 40px;
background-color: ${(p) => p.theme.colors.bgSecondary};
@media  ${breakpoints.tablet} {
    max-width: 608px;
    max-height: 399px;
  }
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
  align-items: space-between;
  margin: 20px 160px;
   @media ${breakpoints.tablet} {
    margin: 28px 160px 20px;
  }
`;
const ButtonListItem = styled.li`
  width: 130px;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
`;

ModalAddReview.propTypes = {
 onClose: PropTypes.func.isRequired,
};
export default ModalAddReview;

