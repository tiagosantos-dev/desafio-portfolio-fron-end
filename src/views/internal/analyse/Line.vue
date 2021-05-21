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
  
  beforeCreate: function(){
    
  
    for(let i = 0 ; i < this.listOfInvoice.length ; i++){
      this.option.xAxis.data.push(this.listOfInvoice[i]['invoiceNumber'])
      this.option.series[0].data.push(this.listOfInvoice[i]['total'])
    }

  },
  props:["listOfInvoice"],
  name: "HelloWorld",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "white"
  },
  setup: () => {
    let option = ref({
  xAxis: {
    data: []
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      type: "line",
      data: [1,5,10,15,20,25]
    }
  ],
  title: {
    text: "Todas as notas",
    x: "center",
    textStyle: {
      fontSize: 24
    }
  },
  color: ["#127ac2"]
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