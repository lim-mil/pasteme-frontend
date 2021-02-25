<template>
  <div class="login">
    <section class="section">
      <div class="container">
        <div class="field">
          <p class="control">
            <input class="input" type="email" placeholder="Email">
          </p>
        </div>
        <div class="field">
          <p class="control">
            <input class="input" type="password" placeholder="Password">
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success">
              Login
            </button>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {apiLogin} from "@/request/api";

export default {
  name: "Login",
  data: () => {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login: function () {
      apiLogin(this.username, this.password).then(response => {
        let jwt = response.data.token;
        let username = response.data.username;
        localStorage.setItem("JWT_TOKEN", jwt);
        localStorage.setItem("username", username);
      })
    }
  }

}
</script>

<style lang="stylus">

</style>