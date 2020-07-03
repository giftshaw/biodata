<template>
<chart :options="chartOptionsBar"></chart>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    chartOptionsBar: {
       xAxis: {
    data: ['A', 'B', 'AB', 'O']
  },
  yAxis: {
    type: 'value'
  },
   series: [
    {
      type: 'bar',
      data: [0-12, 13-19, 20-40, 41-65]
    }
  ]
    }
  })
}
</script>

<style scoped>
</style>