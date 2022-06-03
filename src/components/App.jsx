import { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import CountdownPanel from 'components/CountdownPanel';
import DateInput from 'components/UI-kit/inputs/DateInput';

import { timeFormatToString } from 'utils/timeFormatToString';
import { getCurrentEndYearDate } from 'utils/getCurrentEndYearDate';

const App = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Wrapper>
      <DateInput value={date} onChange={setDate} />

      <CountdownPanel title="Year countdown" date={getCurrentEndYearDate()} />
      <CountdownPanel title="Goals countdown" date={timeFormatToString(date)} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 320px;

  @media ${breakpoints.tablet} {
    max-width: 768px;
  }

  @media ${breakpoints.desktop} {
    max-width: 1024px;
  }
`;

export default App;
