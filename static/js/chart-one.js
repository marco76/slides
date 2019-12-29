const buildJEPChart = function() {
var ctx = document.getElementById('myChart');
console.log('ctx', ctx);

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['10 (03.2018)', '11 (09.2018)',
         '12 (03.2019)', '13 (09.2019)', '14 (03.2020)'],
         datasets: [{
            data: [12, 17, 8, 5, 16],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 0, 0, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
                'rgba(255, 0, 0, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
          text: 'Java Enhancement Proposals',
          fontColor: 'white',
          fontSize:40
        },
        legend: {
          labels: {
              fontColor: 'white'
            },
        },
        
        scales: {
            yAxes: [{
                ticks: {
                    mirror: true,
                    beginAtZero: true,
                    fontColor: 'white',
                    fontSize: 32,

                }
            }],
            xAxes: [{
              ticks: {
                  fontColor: 'white',
                  fontSize: 26
              },
          }]
        }
    }
})
console.log('chart', myChart)
myChart.update();
};