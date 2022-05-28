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
  flex-direction: column;
  gap: 1rem;
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem;
    border: 1px solid #F0F0F0;
    border-radius: 0.5rem;
    font-size: 0.9em;
    cursor: pointer;
    position: relative;
    transition: all 0.3s;
    &:focus{
      border: 1px solid #333;
    }
    &:hover{
      transition: all 0.3s;
      transform: scale(0.9);
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
.p-datatable .p-column-header-content {
  justify-content: center;
}
.p-datatable-tbody tr:nth-child(even) {
  background: rgb(250, 250, 250)
}
.p-datatable-table{
  font-family: "Poppins", sans-serif;
}
.p-datatable-wrapper{
  max-width: 1300px;
}
.formkit-actions{
    display: flex;
    flex-direction: row-reverse;
}
.panel{
  margin-left: 14rem;
}
</style>
