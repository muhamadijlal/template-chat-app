import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import "@/style.css";
import App from "@/App.vue";
import router from "@/routes.js";
import axios from "axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

axios.defaults.withCredentials = true;

library.add(fas, far);

const app = createApp(App);
const pinia = createPinia();

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia);
pinia.use(({ store }) => {
  store.$router = markRaw(router);
});
app.use(router);
app.mount("#app");
