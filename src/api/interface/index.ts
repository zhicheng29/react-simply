import type { RouteObjectType } from "@/routers/interface";

export interface ResponseType<T> {
  code: number;
  data: T;
  msg: string;
}

export interface LoginReqType {
  username: string;
  password: string;
  vcode: string;
}

export interface UserInfoType {
  name: string;
}

export interface LoginResType {
  access_token: string;
  userInfo: UserInfoType;
}

export interface AuthState {
  authMenuList: RouteObjectType[];
}
