import { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import CountdownPanel from 'components/CountdownPanel';
import DateInput from 'components/UI-kit/inputs/DateInput';

import { timeFormatToString } from 'utils/timeFormatToString';
import { getCurrentEndYearDate } from 'utils/getCurrentEndYearDate';

import TrainingPage from 'pages/TrainingPage';

const App = () => {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());

  return (
    <section>
      <TrainingPage />
    </section>
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
