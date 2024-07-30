import axios from "axios";

const http = axios.create({
  // 请求地址前拼接
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // 请求头
  headers: {},
  // 超时
  timeout: 30000,
});
// 响应码拦截规则
function successHandle(response) {
  switch (response.status) {
    case 200:
      return response.data;
    default:
      return Promise.reject(response.data);
  }
}
// 错误响应拦截
function errorHandle(error) {
  return Promise.reject(error);
}
// 请求拦截器
http.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);
// 响应拦截器
http.interceptors.response.use(
  response => successHandle(response),
  error => errorHandle(error),
);

export default http;
