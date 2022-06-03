import { useState, useEffect } from 'react';
import { DateTime as dt } from 'luxon';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fromNumberPadStart } from 'utils/fromNumberPadStart';

const DIFF_FORMAT = ['days', 'hours', 'minutes', 'seconds'];

const CountdownPanel = ({ title, date }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const formattedDate = dt.fromISO(date);
      const currentDate = dt.now();

      const difference = handleTimeDiff(currentDate, formattedDate);

      if (!difference) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return clearInterval(interval);
      }

      setCountdown(difference);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  const handleTimeDiff = (start, end) => {
    const diffTime = end.diff(start, DIFF_FORMAT);

    if (diffTime.values.seconds < 0) {
      return false;
    }

    return diffTime;
  };

  const renderTimer = () => {
    const { days, hours, minutes, seconds } = countdown;

    return (
      <Timer>
        <Value>{fromNumberPadStart(days)}</Value>
        <Description>days</Description>

        <Value>{fromNumberPadStart(hours)}</Value>
        <Description>HRS</Description>

        <Value>{fromNumberPadStart(minutes)}</Value>
        <Description>mins</Description>

        <Value>{fromNumberPadStart(seconds)}</Value>
        <Description>secs</Description>
      </Timer>
    );
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      {renderTimer()}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;
  max-width: 290px; // console.log(
`;

const Title = styled.h4``;

const Timer = styled.div`
  background-color: ${(p) => p.theme.colors.bgSecondary};
  box-shadow: ${(p) => p.theme.shadows.primary};
`;

const Value = styled.p`
  color: ${(p) => p.theme.colors.secondary};
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
`;

const Description = styled.p`
  color: ${(p) => p.theme.colors.tertiary};
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
`;

CountdownPanel.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default CountdownPanel;
