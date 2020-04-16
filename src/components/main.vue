<template>
    <div class="CV">
        <div style="text-align: center;">
            <h1>XZW</h1>
            <img src="../assets/xiao.jpg" alt="" width="100%">
        </div>
    </div>
</template>

<script>
    export default {
        name: "main.vue",
        data(){
            return {
                num:123456789123456
            }
        },
        methods:{
            zz:function () {
                var str =  this.num;
            // |(^[0-9]{1,15}\.[0-9]{1,4}$)
                // var reg =  /^((0{1}\.\d{1,2})|([1-9]\d*\.{1}\d{1,2})|([1-9]+\d*))$/
                var reg = /^(([1-9]{0,1})(\d{1,5}$))/
                console.log(reg.test(str));
            }
        }
    }
</script>

<style scoped>
    .CV{
        max-width: 800px;
        /* height: 1200px; */
        border: 1px solid #ccc;
        margin: 0 auto;
        border-radius: 5px;
        box-shadow: 10px 10px 10px -1px #ccc;
        box-sizing: border-box;
        padding: 20px;
    }
</style>