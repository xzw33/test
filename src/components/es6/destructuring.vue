<template>
  <div>
      <!-- head -->
      <back/>
      <!-- main -->
      <div class="es6_padding">
        <h2>看控制台</h2>
      </div>
  </div>
</template>

<script>
import back from '@/components/es6/es6GoBack'
export default {
    data(){
        return {
            str:`let a = 5;console.log(a);`
        }
    },
    components:{back},
    methods:{
        clickMe(){
            console.log("数组结构")
            let [a, b, c] = [1, 2, 3];
            console.log(a,b,c);
        },
        obj(){
            console.log("对象结构");
            let { baz : foo } = { baz : 'ddd' };
            console.log(foo);
        },
        mapObj(){
            var myMap = new Map();
            var keyString = "a string"; 
            
            myMap.set(keyString, "和键'a string'关联的值");
            
            myMap.get(keyString);    // "和键'a string'关联的值"
            myMap.get("a string");   // "和键'a string'关联的值"
                                    // 因为 keyString === 'a string'
             console.log(myMap,myMap.get("a string"))                
        },
    },
    mounted(){
        this.clickMe();
        this.obj();
        this.mapObj();
    },
}
</script>

<style>

</style>