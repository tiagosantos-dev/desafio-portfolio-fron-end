<template>
  <div class="col-md-4">
          <div class="card m-2">
            <div class="card-body text-left w-100">
              <h5 class="card-title text-capitalize font-weigth-bold">{{invoice.name}}</h5>
              <p class="card-text information"><i class="fas fa-map-marker-alt text-danger"></i> {{invoice.estabilishment}}</p>
              <p class="card-text information"><i class="fas fa-calendar-week text-primary"></i> {{ date }}</p>
              <p class="card-text information"><i class="fas fa-money-bill-wave text-success"></i>{{invoice.total}}</p>
              <p class="card-text information"><i class="fas fa-barcode"></i> {{invoice.invoiceNumber}}</p>
            
            </div>
            
            <router-link :to="{path:'/view/'+ invoice.id }" class="btn button mb-3">Ver Imposto</router-link>
            
          </div>
          
        </div>
</template>
<script>
    export default{
        props:['invoice'],
        computed:{
            date(){
                let ano = this.invoice.dateOfIssuance.substr(0, 4);
                let mes = this.invoice.dateOfIssuance.substr(5,2)
                let dia = this.invoice.dateOfIssuance.substr(8)
                return  `${dia}/${mes}/${ano}`
            }

        }

    }
</script>
<style>
.text-left {
  text-align: start;
}
.font-weigth-bold {
  font-weight: bold;
}

.information i {
  margin-right: 10px;
}

.btn:hover{
  color: #fff;

}
</style>