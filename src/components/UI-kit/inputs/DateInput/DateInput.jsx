import PropTypes from 'prop-types';
import styled from 'styled-components';
import DateTimePicker from 'react-datetime-picker';

import iconCalendar from 'assets/icons/calendar.svg';

import './DateInput.css';

const DateInput = ({ value, onChange }) => (
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
);

const Icon = styled.img`
  padding: 0;
`;

DateInput.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DateInput;
