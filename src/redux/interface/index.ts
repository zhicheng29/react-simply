// user
import type { UserInfoType } from "@/api/interface";
import type { RouteObjectType } from "@/routers/interface/index.ts";

// theme
export type LanguageType = "zh" | "en" | null;
export type Layout = "classic" | "horizontal" | "column" | "vertical";
export interface ThemeStateType {
  isDark: boolean;
  isCollapsed: boolean;
  language: LanguageType;
  themeColor: string;
  layout: Layout;
  beginAnimation: boolean;
}

// user
export interface UserStateType {
  token: string;
  userInfo: UserInfoType;
}

// auth
export interface AuthState {
  authMenuList: RouteObjectType[];
}

// tab
export interface TabPropType {
  title: string;
  icon: string;
  path: string;
  closable: boolean;
}
