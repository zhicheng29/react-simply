import RequestHttp from "@/api";

// import authMenuList from "@/constants/json/authMenuList.json";

import type { AuthState } from "@/redux/interface";

// 权限菜单
export const getAuthApi = () => {
  return RequestHttp.get<AuthState>("/permission");
  // return authMenuList;
};
