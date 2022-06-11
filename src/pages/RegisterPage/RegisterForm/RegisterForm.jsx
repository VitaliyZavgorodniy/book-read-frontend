import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import { useFormik } from 'formik';

import FormInput from 'components/UI-kit/inputs/FormInput';
import GoogleButton from 'components/UI-kit/buttons/GoogleButton';
import InlineButton from 'components/UI-kit/buttons/InlineButton';
import CommonButton from 'components/UI-kit/buttons/CommonButton';

import { validate } from 'utils/validateForRegistration';

const RegisterForm = ({ onRegister, isFetching }) => {
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm: '',
  };

  const form = useFormik({
    initialValues,
    validate,
    enableReinitialize: true,
    onSubmit: ({ name, email, password }) => {
      onRegister({ name, email, password });
    },
  });

  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    form;

  const onPasteHandler = (e) => {
    e.preventDefault();
  };

  const handleLink = () => {
    navigate('/login');
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
            title="Name"
            placeholder="User Name"
            name="name"
            type="text"
            disabled={isFetching}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name ? errors.name : null}
          />
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
            error={touched.password && errors.password ? errors.password : null}
          />
        </ItemWrapper>

        <ItemWrapper>
          <FormInput
            required
            title="Confirm password"
            placeholder="********"
            name="confirm"
            type="password"
            disabled={isFetching}
            value={values.confirm.slice(0, 30)}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.confirm && errors.confirm ? errors.confirm : null}
            onPaste={onPasteHandler}
          />
        </ItemWrapper>

        <ItemWrapper>
          <CommonButton type="submit" title="Register" variant="accent" size="lg" />
        </ItemWrapper>
      </ItemList>
      </Form>

      

      <TextWrapper>
        <Text>
          Already have an account?{' '}
          <InlineButton label="Log in" variant="accent" onClick={handleLink} />
        </Text>
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
  padding: 32px 20px 44px 20px;
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

const Text = styled.p`
  font-family: ${(p) => p.theme.font.familyPrimary};
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: ${(p) => p.theme.colors.tertiary};
`;
const ItemList = styled.ul`
`;

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
    margin-top: 35px;
  }
}
`;
const TextWrapper = styled.div`
  margin-top: 20px;
`
RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default RegisterForm;
