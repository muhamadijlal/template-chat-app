import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import router from "@/routes.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
