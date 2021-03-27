<template>
  <div id="checkout">

  </div>
</template>

<script>
import {apiCheckout} from "@/request/api";

export default {
  name: "Checkout",
  mounted() {
    apiCheckout(this.$route.params.id).then(response => {
      localStorage.setItem("JWT_TOKEN", response.data.jwt_token);
      this.$router.push({"name": "Record"});
    })
  }
}
</script>

<style scoped>

</style>