<template>
  <section class="section">
    <AsideNav />
    <router-view></router-view>
  </section>
</template>

<script>
import AsideNav from "@/components/admin/AsideNav.vue";
import Box from "@/components/admin/box.vue";

export default{
    components: {
      AsideNav,
    },  
    setup() {
        
    },
}
</script>

<style scoped>
.section{
    margin: 0;
}
</style>
