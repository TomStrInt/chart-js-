import Chart from 'chart.js/auto'

let chartColors = {
    red: 'rgb(255, 99, 132)',
    blue: 'rgb(54, 162, 235)'
};

let color = Chart.helpers.color;
let config = {
    type: 'bar',
    data: {
        datasets: [{
            type: 'line',
            yAxisID: 'temperature',
            backgroundColor: 'transparent',
            borderColor: chartColors.red,
            pointBackgroundColor: chartColors.red,
            tension: 0,
            fill: false
        }, {
            yAxisID: 'precipitation',
            backgroundColor: color(chartColors.blue).alpha(0.5).rgbString(),
            borderColor: 'transparent'
        }]
    },
    plugins: [ChartDataSource],
    options: {
        title: {
            display: true,
            text: 'CSV data source (index) sample'
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                id: 'temperature',
                gridLines: {
                    drawOnChartArea: false
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Temperature (°C)'
                }
            }, {
                id: 'precipitation',
                position: 'right',
                gridLines: {
                    drawOnChartArea: false
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Precipitation (mm)'
                }
            }]
        },
        plugins: {
            datasource: {
                type: 'csv',
                url: 'data/drogi-rowerowe-gus.csv',
                delimiter: ',',
                rowMapping: 'index',
                datasetLabels: true,
                indexLabels: true
            }
        }
    }
};

window.onload = function() {
    let ctx = document.getElementById('myChart').getContext('2d');
    window.myChart = new Chart(ctx, config);
};