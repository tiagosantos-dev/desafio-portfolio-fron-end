<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart, PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LineChart
]);

export default defineComponent({
    props:["listOfInvoice"],
  name: "HelloWorld",
  components: {
    VChart
  },
  beforeCreate(){
    this.listOfInvoice

    for(let x =0 ; x < this.listOfInvoice.length ; x++){ 
      this.option.xAxis.data.push(this.listOfInvoice[x]['invoiceNumber'])
    }

  },
  provide: {
    [THEME_KEY]: "white"
  },
  setup: () => {
    let option = ref({
  xAxis: {
    data: ['Q1', 'Q2', 'Q3', 'Q4']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      type: 'bar',
      data: [63, 75, 24, 92]
    }
  ]
});

    return { option };
  }
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>