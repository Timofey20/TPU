import { createApp } from "vue";
import App from "./App.vue";
import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm.js';
import '@fancyapps/ui/dist/fancybox/fancybox.css';


Fancybox.bind('[data-fancybox="gallery"]', {});


const app = createApp(App);

// app.component("CoolLightBox", CoolLightBox);

app.mount("#app")
