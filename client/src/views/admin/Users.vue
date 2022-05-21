<template>
  <section class="panel">
    Users (2132)
<div ref="dropdown" class="dropdown">
    <strong class="dropdown-label" @click="show = !show"
      >Click me to open!</strong
    >
    <p class="dropdown-content" v-if="show">Lorum ipsum...</p>
  </div>
  </section>
</template>

<script>
import autoAnimate from "@formkit/auto-animate";
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    autoAnimate(this.$refs.dropdown);
  },
};
</script>

<style lang="scss" scoped>
.panel{
  background-color: #FAFAFA;
  width: 100%;
  color: #333;
}
</style>
