// 用户接口集合
export default {
  // 登录
  postUserLogin(data) {
    return http({
      url: "/user/login",
      method: "post",
      data,
    });
  },
  // 获取用户日志
  postUserLog(params) {
    return http({
      url: "/user/log",
      method: "get",
      params,
    });
  },
};
