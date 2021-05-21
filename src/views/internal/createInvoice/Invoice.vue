<template>
    <createInvoice @loadInvoice="receveidInvoice($event)" :isErro="isError"></createInvoice>
</template>
<script>
import CreateInvoice from './components/CreateInvoice.vue'
import axios from 'axios'
export default {
    components:{
        createInvoice: CreateInvoice
       

    },
    data:function(){
        return{
             isError: false

        }

    },
    methods:{
        receveidInvoice: function(data){
           if(data){
            axios.post('http://localhost:8080/api/invoices', data).then(response =>{
                console.log(response)
                if(response.data){
                    this.$router.push({path: `/view/${response.data.id}`});

                }
            }).catch(() =>{
                this.isError = true;

            })
            
           }
           
        } 
    }

}
</script>
<style>

</style>