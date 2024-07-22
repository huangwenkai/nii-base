/**
 * Table数据获取的hook封装
 * @param {*} api 请求api
 * @param {*} param 请求参数
 * @returns
 */
const useTableData = (api, param) => {
  const tableData = ref([]);
  const tableLoading = ref(false);

  const getTableData = () => {
    tableLoading.value = true;
    api(param)
      .then(res => {
        tableData.value = res.data;
      })
      .catch(err => {})
      .finally(() => {
        tableLoading.value = false;
      });
  };

  return { tableData, tableLoading, getTableData };
};

export default useTableData;
