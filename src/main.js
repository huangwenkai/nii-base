import "./assets/styles/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

import dayjs from "dayjs";
import bignumber from "bignumber.js";

const app = createApp(App);

// 全局变量
app.config.globalProperties.$day = dayjs; // 时间处理库
app.config.globalProperties.$big = bignumber; // 数字处理库

// 状态管理（持久化）
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);

app.mount("#app");
