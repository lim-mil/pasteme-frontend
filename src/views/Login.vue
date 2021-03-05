<template>
  <div class="login">
    <section class="section">
      <div class="container">
        <div class="field">
          <p class="control">
            <input class="input" v-model="username" type="text" placeholder="Username">
          </p>
        </div>
        <div class="field">
          <p class="control">
            <input class="input" v-model="password" type="password" placeholder="Password">
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success" @click="login">
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
      username: "",
      password: ""
    }
  },
  methods: {
    login: function () {
      apiLogin(this.username, this.password).then(response => {
        let jwt = response.data.token;
        localStorage.setItem("JWT_TOKEN", jwt);
        this.$router.push({"name": "Record"});
      })
    }
  }

}
</script>

<style lang="stylus">

</style>