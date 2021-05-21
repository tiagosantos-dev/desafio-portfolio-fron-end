<template>
  <div>
    <header>
      <div class="row header">
        <div class="d-flex align-items-center justify-content-start mobo-hidden">
            <div class="bars" @click="onSidebarNav = !onSidebarNav"  >
                  <i class="fa fa-bars "></i>
            </div>
          <h2 class="title">Unifiscal</h2>
        </div>
      </div>
    </header>

    <div class="w-100 d-flex h-100 abs">
      <div class="sidebar "  :style="{'width': onSidebarNav ? '15%' : '0px'}">
            <ul class="p-0 mt-2" :style="{'opacity': onSidebarNav ? '1' : '0' }">
              <li><router-link to="/" class="link"  ><i class="fa fa-home icon"></i>  <strong>Página Inicial</strong></router-link></li>    
              <li><router-link to="/create" class="link"  ><i class="fas fa-file-invoice icon"></i> <strong>Cadastrar nota fiscal</strong> </router-link></li>    
              <li><router-link to="/analyse" class="link"  ><i class="fas fa-chart-bar icon"></i> <strong>Análise</strong> </router-link></li>    
              <li><router-link to="/" class="link"  ><i class="fas fa-sign-out-alt icon"></i><strong>Sair</strong>    </router-link></li>    
          </ul>
      </div>
      <div class=" w-100">
          <router-view></router-view>
      </div>
    </div>
  
  </div>
  
</template>
<script>




export default {
   

    data: function(){
        return{
            onSidebarNav : true
        }

    },

    
    watchs:{},
   

    methods:{
       
    
    }
};
</script>
<style>
.header {
  background: #00995d;
  width: 100%;
  height: 4.5rem;
  box-shadow: 2px 1px 5px grey;
  margin: 0px !important;
}
.sidebar{
    /* width: 300px; */
    background: #c0bdbd;
    box-shadow: 1px 2px 3px rgb(207, 204, 204);
    transition: all .2s ease-in-out ;
}
.abs{
    position: absolute;
}

.sidebar ul{
    list-style: none;
    text-align: start;
}
.sidebar ul li a{
    display: block;
    text-decoration: none;
    color: rgb(90, 86, 86);
    padding: 10px;
    transition: all .2s ease-in-out ;
    /* border-bottom: 1px solid rgb(224, 224, 224); */
   

}

.icon{
    margin-right: 10px;
    color: rgb(241, 238, 238);
      transition: all .2s ease-in-out;

}

.title{
    color: #fff;
    margin: 0px;
    

}
.link:hover{
    background: rgba(255, 255, 255, 0.2);
    color: #00995d;
}

.link:hover > .icon{

    color: #00995d;

}
.bars{
    color: #fff;
    font-size: 1.2rem;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s ease-in-out;
    cursor: pointer;
}

.bars:hover{
    background: rgba(255, 255, 255, 0.2);
   


}

@media (max-width: 768px) {
    .mobo-hidden{
      overflow-x: hidden;
    }
 
    .sidebar {
      width: 20%;
    }
    .link strong{
      display: none;
      font-weight: 200  !important;

    }
    .icon{
      margin: 0px;
      font-size: 20px;
    }
}
</style>