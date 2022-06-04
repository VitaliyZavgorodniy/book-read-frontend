import { useFormik } from 'formik';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import SignUpForm from 'components/SignUpForm';
import background from 'assets/images/background.jpg';

import { validate } from 'utils/validateForRegistration';

const SignUpPage = ({ onSignup }) => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm: '',
  };
  const formik = useFormik({
    initialValues,
    validate,
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log(values);
      setSubmitting(false);
      const { name, email, password } = values;
      await onSignup({ name, email, password });
      resetForm();
    },
  });

  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    formik;

  return (
    <Registration>
      <FormBox>
        <button
          type="button"
          style={{
            width: '150px',
            height: '40px',
            marginBottom: '28px',
          }}
        >
          Google
        </button>
        <SignUpForm
          values={values}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
        />
        <div>
          <Text>
            Already have an account?{' '}
            <span
              style={{
                color: '#FF6B08',
              }}
            >
              Log in
            </span>
          </Text>
        </div>
      </FormBox>
    </Registration>
  );
};

const Registration = styled.div`
  margin-top: 60px;
  width: 100%;
  padding: 32px 20px 44px;
  background-color: rgba(9, 30, 63, 0.8);
  background-image: linear-gradient(
      to right,
      rgba(9, 30, 63, 0.8),
      rgba(9, 30, 63, 0.8)
    ),
    url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media ${breakpoints.tablet} {
    padding: 64px 0;
  }
  @media ${breakpoints.laptop} {
    width: 50vw;
    max-width: 549px;
    padding: 90px 0;
  }
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media ${breakpoints.tablet} {
    width: 400px;
    padding: 40px;
    margin: 0 auto;
    background-color: ${(p) => p.theme.colors.bgSecondary};
  }
`;

const Text = styled.p`
  font-family: ${(p) => p.theme.font.familyPrimary};
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: ${(p) => p.theme.colors.tertiary};
`;

export default SignUpPage;
