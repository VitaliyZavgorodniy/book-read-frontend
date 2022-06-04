import { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import CountdownPanel from 'components/CountdownPanel';
import DateInput from 'components/UI-kit/inputs/DateInput';

import { timeFormatToString } from 'utils/timeFormatToString';
import { getCurrentEndYearDate } from 'utils/getCurrentEndYearDate';

import Quotes from './Quotes';

const App = () => {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());

  return (
    <Wrapper>
      <Item>
        <DateInput value={dateFrom} onChange={setDateFrom} />
        <DateInput value={dateTo} onChange={setDateTo} />
      </Item>

      <Item>
        <CountdownPanel
          title="Year countdown"
          dateTo={getCurrentEndYearDate()}
        />
      </Item>
      <Item>
        <CountdownPanel
          title="Goals countdown"
          dateFrom={timeFormatToString(dateFrom)}
          dateTo={timeFormatToString(dateTo)}
        />
      </Item>

      <Item>
        <Quotes />
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
