/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { getDayFromNow, getDaysArray } from '../../utils/getDaysArray';
import useTypedSelector from '../../hooks/useTypedSelector';

Chart.register(CategoryScale);

export const BarChart = () => {
  const { weeksAgo, workTimeStats } = useTypedSelector((state) => state.stats);

  const [from, to] = [(weeksAgo + 1) * 7, weeksAgo * 7];

  const filterByPeriod = ({ date }: { date: number }) =>
    date > getDayFromNow(from).getTime() && date <= getDayFromNow(to).getTime();

  const data = workTimeStats.filter(filterByPeriod).map((el) => el.workTime);

  const maxValue = Math.max(...data);
  const colorize = () => (ctx: any) => ctx.parsed.y === maxValue ? '#DC3E22' : '#EA8979';

  const chartData = {
    labels: getDaysArray(weeksAgo * 7),
    datasets: [
      {
        label: 'Время работы (мин.)',
        backgroundColor: colorize(),
        data,
      },
    ],
  };

  const chartOptions: ChartOptions<'bar'> = {
    plugins: { legend: { display: false } },
    scales: {
      y: { position: 'right', max: maxValue },
      x: { grid: { display: false } },
    },
  };

  if (!workTimeStats.length) {
    return <></>;
  }
  return <Bar data={chartData} options={chartOptions} />;
};
