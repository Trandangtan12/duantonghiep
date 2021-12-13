import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({dataDefault , dataPirce , labels}) => {
    const data = {
        labels: labels,
        datasets: [
          {
            label: 'Tổng vé xe',
            fill: true,
            lineTension: 0.1,
            backgroundColor: '#059669',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 1,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataDefault
          },
          {
            label: 'Tổng số tiền',
            data: dataPirce,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ]
      };
    
    return (
       <Bar data={data} />
    )
}

export default BarChart
