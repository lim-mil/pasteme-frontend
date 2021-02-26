<template>
  <div id="navbar">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <p class="navbar-item">
          pasteme
        </p>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="https://lqzhgood.github.io/bulma-docs-cn/">
            Records
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <button class="is-primary button" @click="logout">退出</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout: function() {
      localStorage.removeItem("JWT_TOKEN");
      localStorage.removeItem("username");
      this.$router.push({"name": "Login"})
    }
  }
}
</script>

<style scoped>

</style>