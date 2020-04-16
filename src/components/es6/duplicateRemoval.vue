<template>
  <div>
      <!-- head -->
      <back/>
      <!-- main -->
      <div class="es6_padding">
        <h2>数组去重</h2>
      </div>
      <div>
          <el-input v-model="adds"></el-input><el-button @click="addList">add</el-button><br>
          <span v-for="(item,index) in list" :key="index">{{item}},</span>
      </div>
      <h2>Set去重</h2>
      <div>
          <el-button @click="_set">_set</el-button>
          <div v-if="setList">
            <span v-for="(item,index) in setList" :key="index">{{item}},</span>  
          </div>
          
      </div>   
  </div>
</template>

<script>
import back from '@/components/es6/es6GoBack'
export default {
    data(){
        return {
            list:[],
            adds:"",
            setList:[]
        }
    },
    components:{back},
    methods:{
        addList(){
            let s = this.adds;
            this.list.push(s);
            this.adds = "";
        },
        _set(){
            var mySet = new Set(this.list);
            console.log([...mySet]);
            this.setList = [...mySet];
            alert`Hello world!`;
        },
    },
    mounted(){
        
    },
}
</script>

<style>

</style>