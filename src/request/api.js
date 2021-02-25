import {post} from "@/request/http";

export const apiLogin = (username, password) => {
  let url = "/users/login";
  let params = {
    "username": username,
    "password": password
  }
  return post(url, params);
}

