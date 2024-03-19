// user
import type { RouteObjectType } from "@/routers/interface/index.ts";

export interface UserStateType {
  token: string;
  userInfo: { name: string };
}

// theme
export type LanguageType = "zh" | "en" | null;

export interface ThemeStateType {
  isDark: boolean;
  language: LanguageType;
  themeColor: string;
}

export interface AuthState {
  authMenuList: RouteObjectType[];
  flatMenuList: RouteObjectType[];
}
