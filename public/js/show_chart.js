const labels = [
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019'
];

const suicide = {
    type:'line',
    label: '全台自殺人數',
    borderColor: 'rgb(255, 99, 132)',
    data: [5285, 5554, 5842, 5592, 5723, 5901, 7103],
};
  
const antidepressant = {
    type:'line',
    label: '全台抗憂鬱藥物使用人數',
    borderColor: 'rgb(60, 95, 189)',
    data: [1141151, 1165942, 1194395, 1212659, 1273561, 1330204, 1397197],
};
  
const config = {
    type: 'scatter',
    data: {labels: labels,datasets:[suicide, antidepressant]},
    options:{}
};

const myChart = new Chart(
      document.getElementById('myChart'),
      config
      );