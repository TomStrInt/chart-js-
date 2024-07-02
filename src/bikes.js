import Chart from 'chart.js/auto'
import { getAquisitionsByYear } from './api'

// ...




(async function() {
const data = await getBikesByYear();

  /*  
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 55 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];
*/
  new Chart(
    document.getElementById('bikes'),
    {
      type: 'bar',
      options: {
        animation: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      },
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Bikes by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );

})();
