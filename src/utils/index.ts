import type { RouteObjectType } from "@/routers/interface";

/**
 * @description 获取系统语言
 * @returns "zh" | "en"
 */
export function getSystemLanguage(): "zh" | "en" {
  const language = navigator.language ? navigator.language : navigator.browserLanguage;
  const isCN = ["cn", "zh", "zh-cn"].includes(language.toLocaleLowerCase());
  if (isCN) return "zh";
  return "en";
}

/**
 * @description 递归扁平化菜单列表
 * @param {Array} menuList - 菜单列表
 * @returns {Array}
 */
export function getFlatMenuList(menuList: RouteObjectType[]): RouteObjectType[] {
  const newMenuList: RouteObjectType[] = JSON.parse(JSON.stringify(menuList));
  return newMenuList.flatMap(item => [item, ...(item.children ? getFlatMenuList(item.children) : [])]);
}
