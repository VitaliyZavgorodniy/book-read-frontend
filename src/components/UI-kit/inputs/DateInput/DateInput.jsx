import PropTypes from 'prop-types';
import styled from 'styled-components';
import DateTimePicker from 'react-datetime-picker';

import iconCalendar from 'assets/icons/calendar.svg';

import './DateInput.css';

const DateInput = ({ title, value, onChange }) => (
  <Wrapper>
    {title ? <Label>{title}</Label> : null}
    <DateTimePicker
      locale="UA-ua"
      format="dd.MM.yyyy HH:mm"
      minDate={new Date()}
      disableClock
      className="datetime-picker"
      clearIcon={null}
      calendarIcon={<Icon src={iconCalendar} />}
      value={value}
      onChange={onChange}
    />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 190px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: ${(p) => p.theme.colors.tertiary};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  &::after {
    content: '*';
    display: ${(p) => (p.isRequired ? 'inline' : 'none')};
    margin-left: 3px;
    color: ${(p) => p.theme.colors.accent};
  }

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  padding: 0;
`;

DateInput.propTypes = {
  title: PropTypes.string,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DateInput;
