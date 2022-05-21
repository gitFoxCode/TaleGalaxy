<template>
  <section class="section">
    <AsideNav />
    <router-view></router-view>
  </section>
</template>

<script>
import AsideNav from "@/components/admin/AsideNav.vue";
import Box from "@/components/admin/Box.vue";

export default{
    components: {
      AsideNav,
    },  
    setup() {
        
    },
}
</script>

<style scoped>
body{
    padding-bottom: 0 !important;
}
.section{
    padding-top: 80px;
    margin: 0;
    display: flex;
}
</style>
