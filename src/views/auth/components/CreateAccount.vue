<template>
    <section id="auth_container" class="d-flex w-100 h-100 align-items-center justify-content-center">
        <form class="p-2">
            <div class="card p-4">
                <div class="block_card">
                    <h1>Unifiscal</h1>
                    <small>Criar conta</small>
                    </div> 
                    <div class="row pb-4">
                        <div class="col-md-6 mb-2">
                            <div class="form-floating ">
                                <input type="email" class="form-control" id="floatingInput" placeholder="Nome">
                                <label for="floatingInput">Nome</label>
                            </div>
                        </div>
                        
                                <div class="col-md-6 mb-2">
                           <div class="form-floating ">
                                <input type="email" class="form-control" id="floatingInput" placeholder="Email">
                                <label for="floatingInput">Email</label>
                            </div>
                        </div>
                    </div>
                    <div class="row pb-4">
                        <div class="col-md-6 mb-2">
                           <div class="form-floating ">
                                <input type="email" class="form-control" id="floatingInput" placeholder="Senha">
                                <label for="floatingInput">Senha</label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-2">
                            <div class="form-floating ">
                                <input type="email" class="form-control" id="floatingInput" placeholder="Confirmar Senha">
                                <label for="floatingInput">Confirmar senha</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <button class="btn button">Cadastrar</button>
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

.button{
    background: green;
    color: #fff;

}
</style>