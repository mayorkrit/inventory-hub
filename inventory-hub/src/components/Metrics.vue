<template>
    <div class="metrics">
      <canvas ref="lineChart" class="metrics__chart"></canvas>
      <canvas ref="pieChart" class="metrics__chart"></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { Chart, registerables } from 'chart.js'
  Chart.register(...registerables)
  
  const lineChart = ref<HTMLCanvasElement | null>(null)
  const pieChart = ref<HTMLCanvasElement | null>(null)
  
  onMounted(() => {
    // Пример линейного графика
    if (lineChart.value) {
      new Chart(lineChart.value, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr'],
          datasets: [
            {
              label: 'Оборачиваемость',
              data: [10, 20, 15, 25],
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }
          ]
        }
      })
    }
  
    // Пример круговой диаграммы
    if (pieChart.value) {
      new Chart(pieChart.value, {
        type: 'pie',
        data: {
          labels: ['Electronics', 'Furniture', 'Clothes'],
          datasets: [
            {
              label: 'Категории',
              data: [40, 30, 30],
              backgroundColor: ['red', 'blue', 'green']
            }
          ]
        }
      })
    }
  })
  </script>
  
  <style lang="scss" scoped>
  .metrics {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &__chart {
      width: 400px;
      height: 400px;
      margin: 1rem;
    }
  }
  </style>
  