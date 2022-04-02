<template>
<ul class="buttons">
    <router-link to="/" v-slot="{ href, navigate, isActive }" custom>
        <li class="button" :class="[isActive && 'button--active']">
            <a :href="href" @click="navigate">Strona główna</a>
        </li>
    </router-link>
    <router-link to="/list" v-slot="{ href, navigate, isActive }" custom>
        <li class="button" :class="[isActive && 'button--active']">
            <a :href="href" @click="navigate">Lista bajek</a>
        </li>
    </router-link>
    <li class="button">
        <button @click="dropdown">Moje konto</button>
    </li>
</ul>
<nav v-if="dropdownActive" class="nav__dropdown"  v-click-outside="dropdown">
    <div class="nav__dropdown__bagde" title="administrator">
        <svg-icon icon="premium-badge" /> Witaj, {{store.state.user.email.split('@')[0]}}
    </div>
    <ul class="nav__dropdown__inner">
        <li><router-link to="/favourites"><svg-icon icon="star" />Ulubione</router-link></li>
        <li><router-link to="/history"><svg-icon icon="history" />Historia</router-link></li>
        <li><router-link to="/settings"><svg-icon icon="settings" />Ustawienia</router-link></li>
        <li @click="logout"><svg-icon icon="logout" />Wyloguj się</li>
    </ul>
</nav>
</template>

<style>
.nav__dropdown__bagde{
    padding: 15px;
    color: #222;
    text-align: center;
    background: url('~@/assets/images/userbadgebackground.png');
    background-size: cover;
    background-repeat: no-repeat;
    font-weight: bold;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
.nav__dropdown__bagde .icon{
    font-size: 1.2em;
    margin-right: 5px;
}
.nav__dropdown{
    position: fixed;
    display:flex;
    flex-direction: column;
    z-index: 9999;
    display: flex;
    background-color: #fff;
    top: 85px;
    right: 40px;
    color: #EFEFEF;
    background-color: #101628;
    border-radius: 8px;
    box-shadow: 1px 1px 21px -10px #000;
}
.nav__dropdown::after{
    content: "";
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #FDFDFF;
}
.nav__dropdown__inner li a{
    display: block;
    text-decoration: none;
    color: #eee;
    padding: 15px 40px;
    border-bottom: 1px solid #112241;
}
.nav__dropdown__inner li:hover{
    background-color: #1F2C53;
    transition: background-color 0.4s
}
.nav__dropdown__inner li{
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.4s
}
.nav__dropdown__inner li:last-of-type{
    padding: 15px 40px;
    color: #FC371D;
    border-bottom: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
.nav__dropdown__inner .icon{
    margin-right: 10px;
}
</style>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import { ref } from 'vue';
import vClickOutside from 'click-outside-vue3'

export default {
    directives: {
      clickOutside: vClickOutside.directive
    },
    setup(){
        const store = useStore();
        const router = useRouter();

        const dropdownActive = ref(false);

        function dropdown(){
            dropdownActive.value = !dropdownActive.value;
        }
        

        function logout(){
            store.dispatch('setToken', null);
            store.dispatch('setUser', null);
            router.push({
                path: '/'
            })

        }

        return { logout, dropdown, dropdownActive, store }
    }
}
</script>