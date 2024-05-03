import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import { createPinia } from "pinia";
import router from "@/router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGoogle);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
