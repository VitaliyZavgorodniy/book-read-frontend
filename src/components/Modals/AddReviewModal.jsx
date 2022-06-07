import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { FaStar } from "react-icons/fa"

const ReviewModal = () => {
  const formik = useFormik({
    initialValues: {
      rating: 0,
      resume: '',
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label>Choose rating of the book</Label>
      
      <StarsWrapper>
        {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input
                            style={{display: "none"}}
                            type="radio"
                            name="rating"
                    value={ratingValue}
                    onChange={formik.handleChange}
                            
                  />
                               <FaStar
                            style={{
                                cursor: "pointer",
                                transition: "color 200ms" }}
                      color={ratingValue <= formik.values.rating ? "#FF6B08" : "#808080"}
                    />
                    </label>
                );
            })} 
      </StarsWrapper>

      <Texarea
        name="resume"
        type="text"
        title="Resume"
        onChange={formik.handleChange}
        value={formik.values.resume}
      />
      <ButtonList>
        <ButtonListItem>
          <button type="button">Back</button>
        </ButtonListItem>
        <ButtonListItem>
          <button type="submit">Save</button>
        </ButtonListItem>
      </ButtonList>
    </Form>
  );
};
const Form = styled.form`
  width: 600px;
  background-color: #ffffff;
  padding: 20px;
`;

const StarsWrapper = styled.div`
  margin-bottom: 20px;
`;
const Label = styled.label`
  margin-bottom: 12px;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
const Texarea = styled.textarea`
  width: 570px;
  height: 170px;
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
