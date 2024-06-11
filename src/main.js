import { createApp } from 'vue';
import jQuery from 'jquery';

import App from './App.vue';
import router from './router';
import 'bootstrap-icons/font/bootstrap-icons.css';

Object.assign(window, { $: jQuery, jQuery });
createApp(App).use(router).mount('#app');
