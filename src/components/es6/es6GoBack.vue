<template>
    <div>
        <el-page-header @back="goBack" :content="modelName"></el-page-header>
        <div>
        
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            modelName:""
        }
    },
    methods:{
        goBack(){
            this.$router.back(-1);
        }
    },
    created(){
        this.modelName = this.$store.state.es6Name;
    },
}
</script>

<style>

</style>