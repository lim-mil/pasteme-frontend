import axios from "axios";
import router from "@/router";
import Vue from "vue";
import CONFIG from "@/config"

// 请求前缀
axios.defaults.baseURL = CONFIG.BASE_SERVER;
// 请求头
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.get['Content-Type'] = "application/json";
// 超时
axios.defaults.timeout = 10000;

axios.interceptors.request.use(
  config => {
    if (localStorage.JWT_TOKEN) {
      config.headers.Authorization = `jwt ${localStorage.JWT_TOKEN}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem("JWT_TOKEN");
          localStorage.removeItem("username");
          router.replace({
            path: "users/login",
            query: {redirect: router.currentRoute.fullPath}
          });
          break;
      }
    }
    return Promise.reject(error);
  }
)

Vue.prototype.$http = axios;

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    })
  })
}

export function post(url, params) {
  console.log(params);
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    })
  })
}

export function delete_(url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    })
  })
}