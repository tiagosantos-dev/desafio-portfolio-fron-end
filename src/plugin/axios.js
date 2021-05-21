import axios from 'axios'
import Vue from 'vue/dist/vue.global'



axios.defaults.baseURL = 'http://localhost:8080/api/'


Vue.prototype.$http = axios
    //intercept requisicao
Vue.prototype.$http.interceptors.request.use(config => {
    console.log(config.method);
    return config;

}, () => {

});
Vue.prototype.$http.interceptors.response.use(res => {
    console.log(res)
}, () => {});