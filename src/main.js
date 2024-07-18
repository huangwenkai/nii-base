import "./assets/styles/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import dayjs from "dayjs";
import bignumber from "bignumber.js";

const app = createApp(App);

// 全局变量
app.config.globalProperties.$dayjs = dayjs; // 时间处理库
app.config.globalProperties.$bignumber = bignumber; // 数字处理库

app.use(createPinia());
app.use(router);

app.mount("#app");
