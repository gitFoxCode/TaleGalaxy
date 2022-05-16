<template>
<ul class="buttons">
    <router-link to="/" v-slot="{ href, navigate, isActive }" custom>
        <li class="button" :class="[isActive && 'button--active']">
            <a :href="href" @click="navigate">Strona główna</a>
        </li>
    </router-link>
    <router-link :to="{ path: '/', hash: '#plans' }" v-slot="{ href, navigate }" custom>
        <li class="button">
            <a :href="href" @click="navigate">Cennik</a>
        </li>
    </router-link>
    <router-link to="/list" v-slot="{ href, navigate, isActive }" custom>
        <li class="button" :class="[isActive && 'button--active']">
            <a :href="href" @click="navigate">Lista bajek</a>
        </li>
    </router-link>
    <router-link to="/login" v-slot="{ href, navigate, isActive }" custom>
        <li class="button" :class="[(isActive || $route.path =='/register') && 'button--active']">
            <a :href="href" @click="navigate">Zaloguj się</a>
        </li>
    </router-link>
</ul>
</template>