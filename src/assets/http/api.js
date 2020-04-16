import {_service,post,get} from './http'

const baseUrl = "api";

const test = {
    test_http:function () {
        return _service.get(baseUrl+'/testUtilsGet',"")
    },
    test_http1:function () {
        return get(baseUrl+'/testUtilsGet',"")
    }
}



//请求本地json文件

const jsonPublic = {
    getAsideJSON:function(){
        return get("/json/aside.json")
    },
    getEs6JSON:function(){
        return get("/json/es6.json")
    },
}   

export default {
    test,
    jsonPublic
}