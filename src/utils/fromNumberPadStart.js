export const fromNumberPadStart = (number) => {
  const parsedInteger = parseInt(number);
  const paddedNumber = String(parsedInteger).padStart(2, '0');

  return paddedNumber;
};
