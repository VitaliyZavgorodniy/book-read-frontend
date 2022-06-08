import styled from 'styled-components';

import InfoBlockIntro from './InfoBlockIntro';
import StatisticTable from 'components/StatisticTable';
// Экран создания книг
const data = [
  { "id": "id-1", "date": "10.10.2019", "time": "08:10:23", "pages": 22 },
  { "id": "id-2", "date": "11.10.2019", "time": "23:50:15", "pages": 164 },
  { "id": "id-3", "date": "12.10.2019", "time": "13:10:05", "pages": 132 },
  { "id": "id-4", "date": "13.10.2019", "time": "11:10:07", "pages": 137 },
  { "id": "id-5", "date": "14.10.2019", "time": "10:10:11", "pages": 10 }
];
const HomePage = () => {
  return (
    <Wrapper>
      <h1>HOME PAGE</h1>
      <div>
        <InfoBlockIntro />
      </div>
      <StatisticTable items={ data }/>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default HomePage;
