import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import Chart from './Chart';

// Пример массива данных статистики пользователя
// const factUserData = [
//   { id: '1', date: '10.10.2019', time: '08:10:23', pages: 32 },
//   { id: '2', date: '12.10.2019', time: '23:50:15', pages: 164 },
//   { id: '3', date: '12.10.2019', time: '13:10:05', pages: 137 },
//   { id: '4', date: '13.10.2019', time: '18:46:19', pages: 164 },
//   { id: '5', date: '15.10.2019', time: '19:52:48', pages: 29 },
// ];

// Подсчет общего количества страниц
const getAmountPages = (booksList) =>
  booksList
    .map((item) => item.pages)
    .reduce((acc, value) => acc + Number(value), 0);

// Определение временных точек для графика
const getLabels = (amountDate, startDate) => {
  let labels = [];
  for (let i = 0; i <= amountDate; i++) {
    let label = new Date(startDate.setDate(startDate.getDate() + 1));
    labels.push(label.toISOString().slice(0, 10));
  }
  return labels;
};

// Расчет планового количества страниц в день
const getPlanData = (amountDate, amountPages) => {
  let arr = [];
  for (let i = 0; i <= amountDate; i++) {
    arr.push(amountPages / amountDate);
  }
  return arr;
};

// Необходимые для компонента пропсы:
// - amountDate - количество дней на тренировку
// = startDate - начальная дата тренирки
// - factUserData - фактические данные тренировки пользователя (дата, количество прочитанных книг)
// - booksList - список книг пользователя

const StatisticsChart = ({
  amountDate,
  startDate,
  factUserData,
  booksList,
}) => {
  const labels = getLabels(amountDate, startDate);
  const amountPages = getAmountPages(booksList);
  const planData = getPlanData(amountDate, amountPages);
  const factData = factUserData.map((item) => item.pages);
  const dayPast = factUserData.map((item) => item.date).length;

  const data = { factData, planData, dayPast };

  return (
    <ChartBlock>
      <Chart labels={labels} data={data} />
    </ChartBlock>
  );
};

const ChartBlock = styled.div`
  position: relative;
  width: 280px;
  height: 290px;
  padding: 25px 22px;
  margin: 0 auto;
  @media ${breakpoints.tablet} {
    width: 704px;
    height: 340px;
    padding: 35px 49px;
  }
  @media ${breakpoints.desktop} {
    width: 928px;
    padding: 37px 40px;
    margin: 0;
  }
`;

StatisticsChart.propTypes = {
  amountDate: PropTypes.number,
  startDate: PropTypes.object,
  factUserData: PropTypes.array,
  booksList: PropTypes.array,
};

export default StatisticsChart;
