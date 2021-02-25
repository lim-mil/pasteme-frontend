import {post, get, delete_} from "@/request/http";
import axios from "axios";

export const apiLogin = (email, password) => {
  let url = "/users/login";
  let params = {
    "email": email,
    "password": password
  }
  return post(url, params);
}

export const apiUploadText = (text) => {
  let url = "/records";
  let params = {
    "type": "text",
    "content": text
  }
  return post(url, params);
}

export const apiRecordList = () => {
  let url = "/records";
  return get(url);
}

export const apiDeleteRecord = id => {
  let url = "/records/" + id;
  return delete_(url);
}

export const apiUploadFile = (url, file) => {
  let form = new FormData();
  let config = {
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }
  form.append("type", "file");
  form.append("content", file);

  return axios.post(url, form, config);
}
