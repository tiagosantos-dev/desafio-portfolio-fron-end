<script>
import Vue from 'vue';
export default new Vue({
    methods:{

        updated: function(obj){
            this.$emit('obj', obj);
        },
        observe:function(callbakc){
            this.$on('obj', callbakc)
        }

    }

});
</script>