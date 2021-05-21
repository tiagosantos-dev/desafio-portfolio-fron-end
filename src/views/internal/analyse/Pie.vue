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
  data:function(){
    return{
     
    }
  },
  props:{
    dataPie:{
        default:[],
        required: true
    }

  },
  beforeCreate:function(){
 
    this.option.series['data'] = this.dataPie

    
    //console.log(this.pieData)
  },
  name: "HelloWorld",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "white"
  },
  setup: () => {
    let option = ref({
      title: {
        text: "Imposto de nota fiscal",
        left: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
      },
      series: [
        {
          name: "Imposto de nota fiscal",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: 15, name: "IRPJ" },
            { value: 7, name: "ICMS" },
            { value: 1.65, name: "PIS" },
            { value: 7.6, name: "COFINS" },
            { value: 9, name: "CSLL" },
              { value: 5, name: "IPI" }
          ],
     
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
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

.echarts >div{
    width: 100%;
    height: auto;
}
.echarts >div > canvas{
    width: 100%;
     height: auto;
}
</style>