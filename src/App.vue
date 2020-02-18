<template>
  <!-- 挂载所有路由 -->
  <a-locale-provider :locale="locale">
    <router-view></router-view>
  </a-locale-provider>
</template>

<script>
import Vue from "vue";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
import { LocaleProvider } from "ant-design-vue";
[LocaleProvider].forEach(e => {
  Vue.use(e);
});
export default {
  data() {
    return {
      locale: zhCN
    };
  }
};
</script>

<style>
</style>
