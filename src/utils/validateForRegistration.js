export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Enter your name';
  } else if (values.name.length > 100) {
    errors.name = 'Must be 100 characters or less';
  } else if (values.name.length < 3) {
    errors.name = 'Must be 3 characters or more';
  } else if (
    !/^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$/i.test(
      values.name
    )
  ) {
    errors.name = 'Field contain errors';
  }

  if (!values.email) {
    errors.email = 'Enter your email';
  } else if (
    !/^([a-z0-9._%+-]{2,})+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Enter your password';
  } else if (values.password.length > 30) {
    errors.password = 'Must be 30 characters or less';
  } else if (values.password.length < 5) {
    errors.password = 'Must be 5 characters or more';
  }

  if (!values.confirm) {
    errors.confirm = 'Enter your password again';
  } else if (values.confirm.length > 30) {
    errors.confirm = 'Must be 30 characters or less';
  } else if (values.confirm !== values.password) {
    errors.confirm = 'The data is different from the password field data';
  }
  return errors;
};
