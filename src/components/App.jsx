import { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import CountdownPanel from 'components/CountdownPanel';
import GoogleButton from 'components/UI-kit/buttons/GoogleButton';
import DateInput from 'components/UI-kit/inputs/DateInput';

import { timeFormatToString } from 'utils/timeFormatToString';
import { getCurrentEndYearDate } from 'utils/getCurrentEndYearDate';

const App = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Wrapper>
      <Item>
        <DateInput value={date} onChange={setDate} />
      </Item>

      <Item>
        <CountdownPanel title="Year countdown" date={getCurrentEndYearDate()} />
      </Item>
      <Item>
        <CountdownPanel
          title="Goals countdown"
          date={timeFormatToString(date)}
        />
      </Item>
      <Item>
        <GoogleButton />
      </Item>
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

const Item = styled.div`
  margin: 40px;
`;

export default App;
