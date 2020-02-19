<template>
  <div class="head">I'm a login page,auto login.</div>
</template>


<script>
import { mapState } from "vuex";

export default {
  created() {
    //namespace
    this.$store.dispatch("user/login");
  },
  computed: mapState({
    user: state => {
      return state.user;
    }
  })
};
</script>

<style lang="scss" scoped>
$color: red;
.head {
  color: $color;
}
</style>
