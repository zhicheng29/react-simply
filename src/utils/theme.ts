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
