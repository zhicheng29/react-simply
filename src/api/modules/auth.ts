import RequestHttp from "@/api";

// import authMenuList from "@/constants/json/authMenuList.json";

import type { AuthState } from "@/stores/interface/index.ts";

// 权限菜单
export const getAuthMenuListApi = () => {
  return RequestHttp.get<AuthState["authMenuList"]>("/hooks" + `/menu/list`);
  // return authMenuList;
};
