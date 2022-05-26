<template>
  <section class="section">
    <AsideNav />
    <router-view></router-view>
  </section>
</template>

<script>
import AsideNav from "@/components/admin/AsideNav.vue";
// import Box from "@/components/admin/Box.vue";

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
    padding-bottom: 0;
}
.section{
    padding-top: 80px;
    margin: 0;
    display: flex;
}
</style>

<style lang="scss">
.p-datatable .p-datatable-tbody > tr > td {
  vertical-align: middle;
}
.p-datatable .p-datatable-thead > tr > th{
  background-color: #FFF;
  color: #292929;
  &:first-of-type{
    border-top-left-radius: 0.5rem;
  }
  &:last-of-type{
    border-top-right-radius: 0.5rem;
  }
}
.p-datatable-wrapper{
  margin-top: 1rem;
  line-height: 150%;
}
.table__options{
  display: flex;
  gap: 1rem;
  .btn {
    padding: 0.3rem;
    border: 1px solid #F0F0F0;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    position: relative;
    &:focus{
      border: 1px solid #333;
    }
    &.btn--edit{
      background-color: hsla(20,100,94,1);
      color: hsla(20,100,60,1);
    }
    &.btn--delete{
      background-color: hsla(0,100,94,1);
      color: hsla(0,100,60,1);
    }
    &.btn--translate{
      background-color: hsla(200,100,94,1);
      color: hsla(200,100,60,1);
    }
  }
}
.badge{
  padding: 0.5rem 0.7rem;
  border-radius: 50rem;
  & .icon{
    margin-right: 0.2em;
  }
  &.badge--admin{
    background-color: hsla(0,100,94,1);
    color: hsla(0,100,60,1);
  }
  &.badge--premium{
    background-color: hsla(30,100,94,1);
    color: hsla(30,100,60,1);
  }
  &.badge--green{
    background-color: hsla(150,100,94,1);
    color: hsla(150,50,60,1);
  }
  &.badge--user{
    background-color: hsla(200,100,94,1);
    color: hsla(200,100,60,1);
  }
  &.badge--reddish{
    background-color: hsla(20,100,94,1);
    color: hsla(20,100,60,1);
  }
}
</style>
