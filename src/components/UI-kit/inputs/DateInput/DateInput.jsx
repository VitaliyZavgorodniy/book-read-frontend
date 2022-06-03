import PropTypes from 'prop-types';
import styled from 'styled-components';
import DateTimePicker from 'react-datetime-picker';

import iconCalendar from 'assets/icons/calendar.svg';

import './DateInput.css';

const CalendarIcon = () => <Icon src={iconCalendar} />;

const DateInput = ({ value, onChange }) => (
  <DateTimePicker
    locale="UA-ua"
    format="dd.MM.yyyy hh:mm"
    minDate={new Date()}
    disableClock
    className="datetime-picker"
    clearIcon={null}
    calendarIcon={<CalendarIcon />}
    value={value}
    onChange={onChange}
  />
);

const Icon = styled.img`
  padding: 0;
`;

export default DateInput;
