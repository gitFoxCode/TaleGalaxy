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
        <a href="#" @click="logout">Wyloguj się</a>
    </li>
</ul>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    setup(){
        const store = useStore();
        const router = useRouter();

        function logout(){
            store.dispatch('setToken', null);
            store.dispatch('setUser', null);
            router.push({
                path: '/'
            })

        }

        return { logout }
    }
}
</script>