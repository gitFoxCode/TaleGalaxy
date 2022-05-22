import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import SvgIcon from '@/components/SvgIcon.vue';
import SvgSprite from '@/components/SvgSprite.vue';
import { sync } from 'vuex-router-sync';
import store from '@/store/store.js';
import vClickOutside from "click-outside-vue3";
import axios from 'axios';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';
import AutoComplete from 'primevue/autocomplete';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// API url
axios.defaults.baseURL = "http://localhost:8081/";

sync(store, router)

createApp(App)
    .use(router)
    .use(store)
    .use(PrimeVue)
    .use(vClickOutside)
    .use(autoAnimatePlugin)
    .component('svg-sprite', SvgSprite)
    .component('svg-icon', SvgIcon)
    .component('Dropdown', Dropdown)
    .component('AutoComplete', AutoComplete)
    .mount("#app");
