import {post} from "@/request/http";

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
