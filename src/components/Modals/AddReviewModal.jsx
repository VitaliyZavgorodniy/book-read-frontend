import React from 'react';
import { useFormik } from "formik";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

export default function ReviewModal() {
    const formik = useFormik({
    initialValues: {
      rating: 0,
      resume: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
    });
    return (
        <Form onSubmit={formik.handleSubmit}>
                <Label>Choose rating of the book</Label>
                <StarsWrapper>
                  {" "}
                  <ReactStars
                    name="rating"
                    count={5}
                    value={formik.values.rating}
                    size={24}
                    emptyIcon={
                      <svg width="17" height="17">
                        <use href="../icons/greyStar.svg"></use>
                      </svg>
                    }
                    fullIcon={
                      <svg width="17" height="17">
                        <use href="../icons/orangeFilledStar.svg"></use>
                      </svg>
                    }
                    activeColor="#FF6B08"
                  />
                  ,
                </StarsWrapper>
                <Label>Resume</Label>{" "}
                <Texarea
                  id="resume"
                  name="resume"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.resume}
                />
              <ButtonList>
                <ButtonListItem>
                  <button type="button" >Back</button>
                </ButtonListItem>
                <ButtonListItem>
                 <button type="submit">Save</button>
                </ButtonListItem>             
              </ButtonList>
              </Form>
    )
}
const Form = styled.form`
width: 600px;
background-color: #FFFFFF;
padding: 20px;
`;

const StarsWrapper = styled.div`
margin-bottom: 20px; `
const Label = styled.label`
margin-bottom: 12px;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #242A37;
`
const Texarea = styled.textarea`
width: 570px;
height: 170px;`
const ButtonList = styled.ul`
list-style: none;
display: flex;
margin: 30px 160px`
const ButtonListItem = styled.li`
margin-right: 30px;
&:last-child{
  margin-right: 0;
}
`