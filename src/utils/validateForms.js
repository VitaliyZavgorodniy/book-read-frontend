export const validateRegister = (values) => {
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
  else if (values.email.startsWith('-') || values.email.slice(-1) === '-') {
    errors.email = 'The field cannot start with a hyphen or end with a hyphen';

  } else if (values.email.length < 6 || values.email.length > 62) {
    errors.email = 'The field can be entered from 7 to 63 characters inclusive';
  }

  if (!values.password) {
    errors.password = 'Enter your password';
  } else if (values.password.length > 30) {
    errors.password = 'Must be 30 characters or less';
  } else if (values.password.length < 5) {
    errors.password = 'Must be 5 characters or more';
  } else if (
    values.password.startsWith('-') ||
    values.password.startsWith('.')
  ) {
    errors.password = 'Поле може містити літери латиниці, цифри та знаки';
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

export const validateLogin = (values) => {
  const errors = {};

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

  return errors;
};
