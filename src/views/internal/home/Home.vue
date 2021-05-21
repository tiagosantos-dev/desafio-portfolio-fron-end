<template>
  <section class="m-4">
    <div>
      <p class="text-uppercase text-left font-weigth-bold">NOTAS FISCAIS CADASTRADA</p>
    </div>
    <hr class="bg-success">
    <div>
      <div class="row">
        <template v-if="listOfInvoice.length !== 0">
          <cardInvoice  v-for="invoice in listOfInvoice" :key="invoice.invoiceNumber" :invoice="invoice"></cardInvoice>
        </template>
        <template v-else>
          <p>Você não possui nota fiscal cadastrada.</p>
        </template>
        
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
import cardInvoice from './components/CardInvoice.vue'
export default {
  components:{
      cardInvoice

  },
  data: function(){

    return{
      listOfInvoice: []

    }
  }
  ,
    beforeCreate: async function(){
        let response =  await axios.get('http://localhost:8080/api/invoices/0/20')
           console.log(  )  
           if(response){
             this.listOfInvoice = response.data
           }


        

    },
    methods:{
          


    }



};
</script>
<style scoped>
.text-left {
  text-align: start;
}
.font-weigth-bold {
  font-weight: bold;
}

.information i {
  margin-right: 10px;
}
</style>