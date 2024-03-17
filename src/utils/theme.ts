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
 * @description 挂载全局样式变量
 * @param {String} key - 变量名
 * @param {String} val - 样式值
 */
export function setStyleProperty(key: string, val: string) {
  document.documentElement.style.setProperty(key, val);
}
