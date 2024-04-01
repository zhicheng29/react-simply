import RequestHttp from "@/api";

// import authMenuList from "@/constants/json/authMenuList.json";

import type { AuthState } from "@/stores/interface/index.ts";

// 权限菜单
export const getAuthApi = () => {
  return RequestHttp.get<AuthState>("/permission");
  // return authMenuList;
};
