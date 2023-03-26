/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { getDaysArray } from '../../utils/getDaysArray';

Chart.register(CategoryScale);

const chartOptions: ChartOptions<'bar'> = {
  plugins: { legend: { display: false } },
  scales: {
    y: { position: 'right', ticks: { stepSize: 1 } },
    x: { grid: { display: false } },
  },
};

export const BarChart = ({ data }: { data: number[] }) => {
  const colorize = () => (ctx: any) => ctx.parsed.y === Math.max(...data) ? '#DC3E22' : '#EA8979';

  const chartData = {
    labels: getDaysArray(),
    datasets: [
      {
        label: 'Время работы (мин.)',
        data,
        backgroundColor: colorize(),
      },
    ],
  };

  return <Bar data={chartData} options={chartOptions} />;
};
