import PropTypes from 'prop-types';
import styled from 'styled-components';

const CountdownPanel = ({ title, date }) => {
  // console.log(date);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Timer>
        <Value>02</Value>
        <Description>days</Description>

        <Value>15</Value>
        <Description>HRS</Description>

        <Value>03</Value>
        <Description>mins</Description>

        <Value>02</Value>
        <Description>secs</Description>
      </Timer>
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
