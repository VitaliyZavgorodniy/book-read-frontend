import { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import CountdownPanel from 'components/CountdownPanel';
import DateInput from 'components/UI-kit/inputs/DateInput';

const App = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Wrapper>
      <DateInput value={date} onChange={setDate} />

      <CountdownPanel title="Goals countdown" date={JSON.stringify(date)} />
    </Wrapper>
  );
};

const List = styled.ul`
  width: 300px;
  padding: 20px;
  background-color: #fff;
`;

const Item = styled.li`
  margin-top: 20px;
`;

const Wrapper = styled.section`
  max-width: 320px;

  @media ${breakpoints.tablet} {
    max-width: 768px;
  }

  @media ${breakpoints.desktop} {
    max-width: 1024px;
  }
`;

const Heading = styled.h1`
  color: ${(p) => p.theme.colors.accent};
`;

const Description = styled.p`
  color: ${(p) => p.theme.colors.secondary};
`;

export default App;
