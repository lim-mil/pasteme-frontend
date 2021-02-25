import {post, get, delete_} from "@/request/http";

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