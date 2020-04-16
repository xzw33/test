<template>
    <el-container style="width: 100%;height: 100%;">
        <el-aside style="width: auto;!important;background: #545c64">
            <el-menu default-active="1"
                     text-color="#fff"
                     background-color="#545c64"
                     class="el-menu-vertical-demo"
                     :collapse-transition="true"
                     @open="handleOpen"
                     @close="handleClose"
                     :collapse="isCollapse">
                <el-menu-item index="1" @click="openClose">
                    <i class="el-icon-location"></i>
                    <span slot="title">{{isCollapse?'点击展开侧边栏':'点击收起侧边栏'}}</span>
                </el-menu-item>
                <el-menu-item v-for="(item,index) in asideList"
                            :key="index+2" 
                            :index="(index+2).toString()"
                            @click="goTo(item.route)">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
import api from '@/assets/http/api'
    export default {
        data(){
            return {
                isCollapse: true,
                asideList:[],
            }
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            openClose:function () {
                //检测是否为手机
	            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                if(!flag){
                    this.isCollapse= this.isCollapse?false:true;
                }else{
                    this.isCollapse = true
                }
                
            },
            goTo:function(href){
                console.log(href)
                this.$router.push(href)
            },
        },
        created(){
             api.jsonPublic.getAsideJSON().then(res=>{
                 console.log(res);
                 this.asideList = res;
             }).catch(err=>{
                 console.log(err)
             })                
        },
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        /*min-height: 400px;*/
    }
    .xzw_img{
        display: inline-block;
        width: 200px;
        height: 200px;
        transition: all .8s;
    }
    .xzw_img_sm{
        display: inline-block;
        width: 65px;
        height: 65px;
        transition: all .8s;
    }
    .el-menu{
        border-right: none !important;
        color: #fff;
    }
</style>