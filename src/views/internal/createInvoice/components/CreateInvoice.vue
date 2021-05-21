<template>

  <section class="m-4">
      <div>
      <p class="text-uppercase text-left font-weigth-bold">CADASTRAR NOTA FISCAL</p>
      <hr class="bg-success">
    </div>
    <form action="" class="">
      <div class="card">
          <h5 class="card-title text-left mt-4">Informe todos os campos</h5>
      <div class="alert alert-danger " v-if="isErro">
            <p  class="text-danger m-0 px-5">Ocorreu um erro ao tenta salvar nota fiscal, tente novamente.</p> 
          </div>
        <div class="row w-100 d-flex align-items-center justify-content-center m-2">

         
          <div class="col-md-4">
            <div class="form-floating">
              <input v-model="invoice.name" type="text" class="form-control" id="name" placeholder="name@example.com" />
              <label for="name">Nome para compra</label>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-floating">
              <input type="date" v-model="invoice.dateOfIssuance" class="form-control" id="dateOfIssuance" placeholder="name@example.com" />
              <label for="dateOfIssuance">Data emissão</label>
            </div>
          </div>
        </div>
         <div class="row w-100 d-flex align-items-center justify-content-center  mb-2">
          <div class="col-md-4">
            <div class="form-floating">
              <input type="text" class="form-control" v-model="invoice.estabilishment" id="estabilishment" placeholder="name@example.com" />
              <label for="estabilishment">Estabelecimento</label>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-floating">
              <input type="number" class="form-control" v-model="invoice.total" id="total" placeholder="name@example.com" />
              <label for="total">Valor total</label>
            </div>
          </div>
        </div>
        <div class="row w-100 d-flex align-items-center justify-content-center  mb-2">
          <div class="col-md-8">
            <div class="form-floating">
              <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Número da nota</label>
            </div>
          </div>
          
        </div>
        <button type="button" class="btn mb-4  button" @click="onSave">Salvar</button>
      </div>
      
    </form>
  </section>
</template>

<script>

export default {
  props:['isErro'],
  data:function(){
    return{
      invoice:{
          name:'',
          invoiceNumber:'',
          estabilishment: '',
          dateOfIssuance: '',
          total: ''
      }
    }
  

  },
    methods:{
      onSave: function(){
        this.$emit('loadInvoice', this.invoice)

      }

    }

};
</script>
<style>
.button{
    background: #0a5f55;
    color: #fff;

}
</style> >
    
