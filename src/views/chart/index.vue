<template>
    <div ref="chart" style="width: 900px; height: 400px;"></div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    name: 'SimpleChart',
    mounted() {
      this.initChart();
    },
    methods: {
      initChart() {
        const chartDom = this.$refs.chart;
        const myChart = echarts.init(chartDom);
        const option = {
          title: {
            text: '简单示例图表'
          },
          tooltip: {},
          xAxis: {
            data: ['项目A', '项目B', '项目C', '项目D']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'line', // 修改此处为 'line'
            data: [5, 20, 36, 10]
          }]
        };
        myChart.setOption(option);
      }
    }
  };
  </script>
  
  