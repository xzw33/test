<template>

  <div>
      <h1>es6快捷入口</h1>
      <hr style="margin:20px 0;">
      <div>
          <el-button 
            v-for="(item,index) in es6List"
            type="primary" 
            plain 
            @click="handleClickES6(item)" 
            :key="index">
            {{item.name}}
          </el-button>
      </div>
  </div>   
</template>

<script>
import api from '@/assets/http/api'
export default {
    data(){
        return {
            es6List:[],
        }
    },
    methods:{
        handleClickES6(item){
            this.$store.state.es6Name = item.name;
            this.$router.push(item.route);
        },
        getEs6List(){
            api.jsonPublic.getEs6JSON().then(res=>{
                //  console.log(res);
                 let data = res.filter((item,i)=>{
                     return JSON.stringify(item) != "{}"
                 })
                 this.es6List = data;
             }).catch(err=>{
                 console.log(err)
             })   
        },
    },
    created(){
        this.getEs6List();
    },
}
</script>

<style scoped>
</style>