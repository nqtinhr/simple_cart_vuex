<template>
  <Cart />
</template>

<script>
import Cart from "./components/Cart";

export default {
  name: "App",
  components: {
    Cart,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-image: linear-gradient(to right, #7de2fc, #b9b6e5);
}
.equal-size-button {
  width: 30px;
  height: 30px;
  background-image: linear-gradient(to right, #7de2fc, #b9b6e5);
}
</style>
