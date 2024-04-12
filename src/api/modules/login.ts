import RequestHttp from "@/api";

import type { LoginReqType, LoginResType } from "@/api/interface";

// 登录
export const loginApi = (params: LoginReqType) => {
  return RequestHttp.post<LoginResType>("/login", params);
};

// 退出登录
export const logoutApi = () => {
  return RequestHttp.post("/logout");
};
