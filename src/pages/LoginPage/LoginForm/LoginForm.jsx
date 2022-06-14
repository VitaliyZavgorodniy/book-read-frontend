import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import { useFormik } from 'formik';

import FormInput from 'components/UI-kit/inputs/FormInput';
import GoogleButton from 'components/UI-kit/buttons/GoogleButton';
import InlineButton from 'components/UI-kit/buttons/InlineButton';
import CommonButton from 'components/UI-kit/buttons/CommonButton';

import { validateLogin } from 'utils/validateForms';

const LoginForm = ({ onLogin, isFetching }) => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const form = useFormik({
    initialValues,
    validate: validateLogin,
    enableReinitialize: true,
    onSubmit: ({ email, password }) => {
      onLogin({ email, password });
    },
  });

  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    form;

  const handleLink = () => {
    navigate('/register');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <ItemList>
          <ItemWrapper>
            <GoogleButton />
          </ItemWrapper>

          <ItemWrapper>
            <FormInput
              required
              title="Email"
              placeholder="your@email.com"
              name="email"
              type="text"
              disabled={isFetching}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email ? errors.email : null}
            />
          </ItemWrapper>

          <ItemWrapper>
            <FormInput
              required
              title="Password"
              placeholder="********"
              name="password"
              type="password"
              disabled={isFetching}
              value={values.password.slice(0, 30)}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.password && errors.password ? errors.password : null
              }
            />
          </ItemWrapper>

          <ItemWrapper>
            <CommonButton
              type="submit"
              title="Login"
              variant="accent"
              size="lg"
            />
          </ItemWrapper>
        </ItemList>
      </Form>

      <TextWrapper>
        <InlineButton onClick={handleLink} label="Register" variant="accent" />
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 20px;
  background-color: transparent;

  @media ${breakpoints.tablet} {
    width: 400px;
    padding: 40px;
    background-color: ${(p) => p.theme.colors.bgSecondary};
  }
`;
const Form = styled.form`
  width: 100%;
  width: 280px;

  @media ${breakpoints.tablet} {
    width: 320px;
  }
`;
const ItemList = styled.ul``;

const ItemWrapper = styled.li`
  margin-top: 20px;

  &:first-child {
    margin-top: 0;
  }
  &:nth-child(2) {
    margin-top: 28px;
  }
  @media ${breakpoints.tablet} {
    &:last-child {
      margin-top: 32px;
    }
  }
`;
const TextWrapper = styled.div`
  margin-top: 20px;
`;
LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
export default LoginForm;
