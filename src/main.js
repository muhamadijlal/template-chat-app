import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import "@/style.css";
import App from "@/App.vue";
import router from "@/routes.js";
import axios from "axios";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

const app = createApp(App);
const pinia = createPinia();

axios.defaults.withCredentials = true;

library.add(fas, far);
app.component("font-awesome-icon", FontAwesomeIcon);

pinia.use(piniaPluginPersistedstate);
pinia.use((context) => (context.store.$router = markRaw(router)));

app.use(pinia);
app.use(router);
app.mount("#app");
