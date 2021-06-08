import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckCircle, faExclamationCircle)

/* Vue.component('font-awesome-icon', FontAwesomeIcon); */
import './assets/style.scss';

createApp(App).use(store).use(router).mount('#app');
