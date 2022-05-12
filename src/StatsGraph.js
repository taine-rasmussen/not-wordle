import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


export const StatsGraph = (props) => {

  const {
    gameSession
  } = props

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = Object.keys(gameSession[0].totalAttemps);
  const options = {

  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Total attemps',
        data: gameSession[0].totalAttemps,
        backgroundColor: '#aeb8bd',
      },
    ],
  };

  return (
    <div className='graph-container'>
      <Bar options={options} data={data} />
    </div>
  )
}
