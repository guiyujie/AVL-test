import axios from 'axios'

//请求拦截器
axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem("x-auth-token");
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers['Authorization'] = `${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios;