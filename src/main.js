import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "vue-multiselect/dist/vue-multiselect.css";
import ArgonDashboard from "./argon-dashboard";
import Multiselect from "vue-multiselect";
import "@vueform/multiselect/themes/default.css";
import Page from 'v-page'

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.use(Page);
appInstance.use(Multiselect);
appInstance.mount("#app");
