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

  const labels = [1, 2, 3, 4, 5]

  const data = {
    labels,
    datasets: [
      {
        label: 'Total attemps',
        data: gameSession[0].totalAttemps,
        backgroundColor: '#3a3a3c',
      },
    ],
  };

  return (
    <div className='graph-container'>
      <Bar data={data} />
    </div>
  )
}
