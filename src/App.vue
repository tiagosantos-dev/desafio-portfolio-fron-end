<template>

   <div id="app">

        <router-view></router-view>
   
   </div>
 
</template>

<script>
//import auth from './views/auth/Auth.vue'

export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}

main:root{
--color-00995d:#00995d;
--color-6cc04a:#6cc04a;
--color-f47920:#f47920;
--color-0a5f55:#0a5f55;
--color-a3238e:#a3238e;
--color-dfe3e8:#dfe3e8;

}
.button{
    background: #00995d;
    color: #fff;

}
.header{
    background: var(--color-00995d);
    width: 100%;
    height: 5rem;
    box-shadow: 2px 1px 5px grey;
    margin: 0px;
    
}

body{
  background: #f4f4f4
}
</style>
