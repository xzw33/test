<template>
    <div>
        <el-button @click="handleClick">clickMe</el-button>
    </div>
</template>

<script>
    import api from '@/assets/http/api'
    export default {
        props: {
            msg: String
        },
        data(){
            return {
                testData:'',
            }
        },
        methods:{
            handleClick:function () {
                console.log("click me1");
                api.test.test_http().then(res=>{
                    console.log(res,'_service');
                })
                api.test.test_http1().then(res=>{
                    console.log(res,'get');
                })
            }
        }
    }
</script>

<style scoped>

</style>
