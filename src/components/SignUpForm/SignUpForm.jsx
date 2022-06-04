import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormInput from 'components/UI-kit/inputs/FormInput';

const SignUpForm = ({
  values,
  handleSubmit,
  handleChange,
  handleBlur,
  touched,
  errors,
}) => {
  const onPasteHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        id={'name'}
        name={'name'}
        title={'Name'}
        type={'name'}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        required
        placeholder="..."
        error={touched.name && errors.name ? errors.name : null}
      />
      <FormInput
        id={'email'}
        name={'email'}
        title={'Email'}
        type={'email'}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        required
        placeholder="your@email.com"
        error={touched.email && errors.email ? errors.email : null}
      />
      <FormInput
        id={'password'}
        name={'password'}
        title={'Password'}
        type={'password'}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password.slice(0, 30)}
        required
        placeholder="..."
        error={touched.password && errors.password ? errors.password : null}
      />
      <FormInput
        id={'confirm'}
        name={'confirm'}
        title={'Confirm password'}
        type={'password'}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.confirm.slice(0, 30)}
        required
        placeholder="..."
        error={touched.confirm && errors.confirm ? errors.confirm : null}
        onPaste={onPasteHandler}
      />

      <button
        type="submit"
        style={{
          width: '100%',
          height: '60px',
          marginBottom: '20px',
        }}
      >
        Submit
      </button>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  & div:not(:last-of-type) {
    height: 67px;
    margin-bottom: 20px;
  }
  & div:last-of-type {
    height: 67px;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      margin-top: 22px;
      margin-bottom: 35px;
    }
  }
`;

SignUpForm.propTypes = {
  values: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  touched: PropTypes.object,
  errors: PropTypes.object,
};

export default SignUpForm;
