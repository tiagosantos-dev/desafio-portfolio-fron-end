<template>
  <section class="m-4">
    <div>
      <p class="text-uppercase text-left font-weigth-bold">VISUALIZAR NOTA {{name}}</p>
      <hr class="bg-success" />
    </div>
    <form action="" class="">
      <div class="row">
        
        <div class="col-md-6" v-for="taxes in listOfTaxes" :key="taxes.id">
          <div class="card">
            <div class="card-body">
              <div class="card-title">{{taxes.name}}</div>
                <p>Sigla: {{taxes.typeOfTax}}</p>
              <!-- <p>Valor da nota fiscal:{{taxes.total}}</p> -->
              <p>Porcentagem do imposto: {{taxes.percent}}%</p>
              <p>Calculo com a porcentagem: {{taxes.total}}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data:function(){
    return {
      listOfTaxes:[],
      name: ''
    }
  },

  async created() {
  console.log('route', );
  let id = this.$router.currentRoute.value.params.id
  if(id){
   let response = await axios.get(`http://localhost:8080/api/invoices/${id}`)
    if(response.data.taxes){
      this.name = response.data.name;
      this.listOfTaxes = response.data.taxes;
    }
   console.log()
  }
  
},
};
</script>
<style>
.button {
  background: #0a5f55;
  color: #fff;
}
</style> >
    
