import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import { DateTime as dt } from 'luxon';

import { fromNumberPadStart } from 'utils/fromNumberPadStart';
import { getTimeDifference } from 'utils/getTimeDifference';

const CountdownPanel = ({ title, dateFrom, dateTo, isStopped = false }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const formattedDateFrom = dt.fromISO(dateFrom ?? dt.now());
    const formattedDateTo = dt.fromISO(dateTo);

    const difference = getTimeDifference(formattedDateFrom, formattedDateTo);

    if (difference) setCountdown(difference);

    if (difference?.isNegative)
      setCountdown({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });

    const interval = setInterval(() => {
      if (!isStopped) {
        const { isNegative } = getTimeDifference(dt.now(), formattedDateFrom);

        if (isNegative) {
          const timerExpires = getTimeDifference(dt.now(), formattedDateTo);

          if (!timerExpires?.isNegative) setCountdown(timerExpires);
          else
            setCountdown({
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0,
            });
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dateFrom, dateTo, isStopped]);

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
  margin-bottom: 9px;
  color: ${(p) => p.theme.colors.tertiary};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

const Timer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2px 44px 8px 44px;
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
  dateTo: PropTypes.string.isRequired,
  dateFrom: PropTypes.string,
};

export default CountdownPanel;
