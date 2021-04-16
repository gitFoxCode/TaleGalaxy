<template>
  <svg-sprite />
  <Nav />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/reset.scss";


*,*::after,*::before{
  box-sizing: border-box;
}
body{
  position: relative;
  font-family: 'Poppins', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  font-display: optional;
  background: url('~@/assets/images/galaxy_body.jpg');
  background-size: cover;
  color: #fff;
  min-height: 100vh;
  padding-bottom: 200px;
}
body::after{
  content: "";
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
  background: linear-gradient(45deg, rgba(15,16,36,0.7) 0%,rgba(41,40,54,0.7) 100%);
  z-index: -2;
}
.logo__text--special, .text--special{
  color: #fc371d;
}
b{
  font-weight: bold;
}
.section{
    padding-top: 130px;
    margin: 0 10%;
    margin-bottom: 100px;
}
.section__title{
    font-size: 2.3em;
    font-family: "Lovelo";
    color: #fc371d;
    text-shadow: 0px 0px 50px #fc371d;
}
input.input--error{
    border: 2px solid tomato;
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
}
.errorbox{
    padding: 10px;
    margin-bottom: 10px;
    background-color: tomato;
    text-align: left;
    color: #fff;
    font-size: 0.8em;
    line-height: 150%;
    border-left: 5px solid red;
}

/* Animations */
@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
