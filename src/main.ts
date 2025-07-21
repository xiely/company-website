import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/bootstrap.min.css';
import '@/assets/css/em-breadcrumb.css';
import '@/assets/css/plugin_theme_css.css';
import '@/assets/css/responsive.css';
import '@/assets/css/style.css';

createApp(App).use(router).mount('#app')