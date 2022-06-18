import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({
  labels,
  data,
  pagesAmount,
  mode,
  averageData,
  overallData,
}) => {
  const { factData, planData, dayPast } =
    mode === 0 ? averageData : overallData;

  const totalPages = factData.reduce((acc, value) => acc + value, 0);

  const calculateAverage = () => {
    if (totalPages <= 0) return 0;
    if (dayPast <= 0) return totalPages;
    return Math.floor(totalPages / dayPast);
  };

  const text =
    mode === 0
      ? `AVARGE PAGES / DAY ${calculateAverage()}`
      : `PAGES AMOUNT ${pagesAmount}`;

  const userData = {
    labels,
    datasets: [
      {
        label: 'Fact',
        data: factData,
        borderColor: '#FF6B08',
        backgroundColor: '#FF6B08',
        cubicInterpolationMode: 'monotone',
      },
      {
        label: 'Plan',
        data: planData,
        borderColor: '#091E3F',
        backgroundColor: '#091E3F',
        cubicInterpolationMode: 'monotone',
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'chartArea',
        align: 'end',
      },
      title: {
        display: true,
        text,
        align: 'start',
        color: `${(p) => p.theme.colors.primary}`,
        font: {
          family: `${(p) => p.theme.font.familyPrimary}`,
          size: 12,
          weight: 500,
          lineHeight: 1.25,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: true,
          drawBorder: true,
        },
        ticks: {
          display: false,
        },
        title: {
          display: true,
          text: 'TIME',
          color: `${(p) => p.theme.colors.secondary}`,
          font: {
            family: `${(p) => p.theme.font.familyPrimary}`,
            size: 12,
            weight: 600,
            lineHeight: 1.25,
          },
          padding: { top: 0, left: 0, right: 0, bottom: 0 },
          align: 'end',
        },
      },
      y: {
        display: true,
        ticks: {
          display: false,
        },
        min: 0,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };
  return <Line options={options} data={userData} />;
};

export default Chart;
