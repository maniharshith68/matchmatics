import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  LegendItem
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  data: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }>;
  };
  showLegend?: boolean;
}

export const BarChart: React.FC<BarChartProps> = ({ data, showLegend=true }) => {
  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
        labels: {
          generateLabels: (): LegendItem[] => ([
            {
              text: 'India',
              fillStyle: '#389df9',
              strokeStyle: '#1878c2',
			  fontColor:'white',		
              hidden: false,
              lineWidth: 1,
              index: 0
            },
            {
              text: 'Australia',
              fillStyle: '#0bc9b1',
              strokeStyle: '#099b90',
			  fontColor:'white',
              hidden: false,
              lineWidth: 1,
              index: 1
            }
          ])
        }
      },
      title: { display: false }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255,255,255,0.1)' },
        ticks: { color: '#ffffff' }
      },
      y: {
        grid: { color: 'rgba(255,255,255,0.1)' },
        ticks: { color: '#ffffff' }
      }
    }
  };

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Bar options={options} data={data} />
    </div>
  );
};
