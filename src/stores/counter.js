// Pinia状态管理
export const useCounterStore = defineStore(
  "counter",
  () => {
    // 数据
    const counter = ref(0);
    // 计算属性
    const doubleCount = computed(() => counter.value * 2);
    // 方法函数
    function init() {
      counter.value = 0;
    }

    return { counter, doubleCount, init };
  },
  { persist: true }, // 持久化
);
