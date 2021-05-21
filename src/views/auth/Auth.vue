<template>
    <section id="auth_container" class="d-flex w-100 h-100 align-items-center justify-content-center">
        <form class="p-2">
            <div class="card p-4">
                <div class="block_card">
                    <h1>Unifiscal</h1>
                    <small>Login</small>
                    </div> 
                    <div class="row pb-4">
                        <div class="col-md-12 mb-2">
                            <div class="form-floating ">
                                <input type="email" class="form-control" id="floatingInput" placeholder="Nome">
                                <label for="floatingInput">Email</label>
                            </div>
                        </div>
                        
                                <div class="col-md-12 mb-2">
                           <div class="form-floating ">
                                <input type="password" class="form-control" id="floatingInput" placeholder="Email">
                                <label for="floatingInput">Senha</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-12">
                            <button class="btn button">Entrar</button>
                        </div>
                    </div>
            </div>
        </form> 
       
    </section>

</template>    

<script>
    export default {
        data: function(){
            return {

            }

        }
    }
</script>

<style scoped>


.card{
    background : #fff

}

.block_card{
    background: green;
    padding:10px;
    border-radius:15px;
    color: #fff;
    position: relative;
    top:-50px;
    box-shadow: 1px 1px 4px grey;
}

label{
    color: grey;

}


</style>