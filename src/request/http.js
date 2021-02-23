import axios from "axios";
import router from "@/router";
import Vue from "vue";

axios.defaults.baseURL = 'http://localhost:9999';
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.get['Content-Type'] = "application/json";
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
            path: "Login",
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
      return resolve(res.data);
    }).catch(err => {
      return reject(err.data);
    })
  })
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, {
      params: params
    }).then(res => {
      return resolve(res.data);
    }).catch(err => {
      return reject(err.data);
    })
  })
}