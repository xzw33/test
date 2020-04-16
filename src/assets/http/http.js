import axios from 'axios'


/*var baseUrl = "";
const _service = axios.create({baseURL:baseUrl,timeout:60 * 1000});*/

const _service = axios.create({timeout:60 * 1000});

// 请求拦截
_service.interceptors.request.use(config => {
        // if (store.getters.token) {
        //   config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        // }
        return config
    },
    error => {
        // Do something with request error
        console.log(error,"axios报错提醒--请求拦截"); // for debug
        return Promise.reject(error)
    })

//响应拦截
_service.interceptors.response.use(response => {
        console.log(response,"响应拦截");
        if (response.status === 200) {
            return response.data
        }else {
            return Promise.reject('error')
        }
    },
    error => {
        console.log('err', error) // for debug
        return Promise.reject(error)
    })

const post = (url, data) => {
    return _service.post(url, {
        params: data
    });
}

const get = (url, data) => {
    return _service.get(url, data);
}

export{
    _service,
    post,
    get
}