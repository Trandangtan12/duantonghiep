import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({dataDefault}) => {
  console.log(dataDefault);
    const data = {
        labels: ['Tháng một', 'Tháng hai', 'Tháng ba', 'Tháng tư', 'Tháng năm', 'Tháng sáu', 'Tháng bảy', 'Tháng tám', 'Tháng chín' , 'Tháng mười' ,'Tháng mười' , "Tháng mười hai"],
        datasets: [
          {
            label: 'Thống kê',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
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
          }
        ]
      };
    
    return (
       <Bar data={data} />
    )
}

export default BarChart
