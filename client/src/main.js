import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import SvgIcon from '@/components/SvgIcon.vue';
import SvgSprite from '@/components/SvgSprite.vue';
import { sync } from 'vuex-router-sync';
import store from '@/store/store.js';

import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';
import AutoComplete from 'primevue/autocomplete';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

sync(store, router)

createApp(App)
    .use(router)
    .use(store)
    .use(PrimeVue)
    .component('svg-sprite', SvgSprite)
    .component('svg-icon', SvgIcon)
    .component('Dropdown', Dropdown)
    .component('AutoComplete', AutoComplete)
    .mount("#app");