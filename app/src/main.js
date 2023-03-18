import { createApp } from 'vue'
import App from './App.vue'
import PhotoSwipe from 'vue-photoswipe.js';
import 'vue-photoswipe.js/dist/static/css/photoswipe.css';

createApp(App).mount('#app').use(PhotoSwipe)
