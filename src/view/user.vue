<template>
  <div class="head">I'm a user {{user.name}}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    //namespace
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
