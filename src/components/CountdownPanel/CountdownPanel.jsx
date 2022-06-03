import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import { DateTime as dt } from 'luxon';

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
        <ValueColumn>
          <Value>{fromNumberPadStart(days)}</Value>
          <Description>days</Description>
        </ValueColumn>

        <DoubleDots>:</DoubleDots>

        <ValueColumn>
          <Value>{fromNumberPadStart(hours)}</Value>
          <Description>HRS</Description>
        </ValueColumn>

        <DoubleDots>:</DoubleDots>

        <ValueColumn>
          <Value>{fromNumberPadStart(minutes)}</Value>
          <Description>mins</Description>
        </ValueColumn>

        <DoubleDots>:</DoubleDots>

        <ValueColumn>
          <Value>{fromNumberPadStart(seconds)}</Value>
          <Description>secs</Description>
        </ValueColumn>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;

  @media ${breakpoints.tablet} {
    width: 290px;
  }
`;

const Title = styled.h4`
  margin-bottom: 8px;
  color: ${(p) => p.theme.colors.tertiary};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

const Timer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 44px;
  background-color: ${(p) => p.theme.colors.bgSecondary};
  box-shadow: ${(p) => p.theme.shadows.primary};
`;

const ValueColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 35px;
`;

const Value = styled.p`
  color: ${(p) => p.theme.colors.secondary};
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
  text-align: center;
`;

const DoubleDots = styled(Value)``;

const Description = styled.p`
  color: ${(p) => p.theme.colors.tertiary};
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  text-align: center;
`;

CountdownPanel.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default CountdownPanel;
