<template>
  <!-- 挂载所有路由 -->
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted: () => {
    console.log("App");
  }
};
</script>

<style>
</style>
