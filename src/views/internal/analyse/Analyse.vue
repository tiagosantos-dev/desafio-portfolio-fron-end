<template>
  <div class="m-4">
    <div>
      <p class="text-uppercase text-left font-weigth-bold">ANÁLISES</p>
    </div>
    <hr class="bg-success">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <piechart :dataPie="dataPie"></piechart>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <linechart :listOfInvoice="listOfInvoice"></linechart>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
              <barchart :listOfInvoice="listOfInvoice"></barchart>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
       
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 import Bar from './Bar.vue'
 import Line from './Line.vue'
  import Pie from './Pie.vue';
  import axios from 'axios';

export default {
  data:function(){
    return {
      listOfInvoice:[],
      dataPie: []

    }

  },

  beforeCreate: async function(){
     let response = await axios.get('http://localhost:8080/api/invoices/0/20')
     this.listOfInvoice = response.data
     console.log(response.data.forEach(element=> this.dataPie.push({value: element.total, name: element.name})))
     console.log(response.data)


  },
  components: {
    // appline: Line,
    piechart: Pie,
    linechart: Line,
    barchart: Bar
    // pie: Pie
  },
};
</script>
<style>
.text-left {
  text-align: start;
}
.font-weigth-bold {
  font-weight: bold;
}

.card{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}

</style>