<template>
  <div>
    <img alt="Vue logo" src="~assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  mounted: () => {
    console.log("index");
  }
};
</script>

<style>
</style>
