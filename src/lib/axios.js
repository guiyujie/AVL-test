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
  //获取更新的token
  const { authorization } = response.headers;
  //如果token存在则存在localStorage
  authorization && localStorage.setItem('x-auth-token', authorization);
  return response;
}, function (error) {
  // Do something with response error
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 返回 401 清除token信息并跳转到登录页面
        localStorage.removeItem("x-auth-token")
        location.reload()
    }
  }
  return Promise.reject(error);
});

export default axios;