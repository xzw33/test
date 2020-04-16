import Vue from 'vue'
import Router from 'vue-router'

//测试 页面
import test from '@/components/test'


//入口页面
import index from '@/components/index'
//主页面
import main from '@/components/main'

//es6模块入口
import es6 from '@/components/es6/es6'
//#变量值结构
import destructuring from'@/components/es6/destructuring'
//#数组去重 
import duplicateRemoval from '@/components/es6/duplicateRemoval'
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error);
}

Vue.use(Router);




export default new Router({
    // mode: 'history',
    routes:[
        {path:'/test',component:test},
        {path:'*',component:index},
        {path:'/',
            component:index,
            children:[
                {path:'/',component:main},
                {path:'/main',component:main},
                {path:'/es6',component:es6},
                {path:'/destructuring',component:destructuring},
                {path:'/duplicateRemoval',component:duplicateRemoval},
            ]
         },
    ]
})