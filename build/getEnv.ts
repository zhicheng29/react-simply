/**
 * @description 提取自定义环境变量
 */
export function conversionEnv(env: Record<string, any>): ViteEnvType {
  const resultEnv: any = {};
  for (const key in env) {
    if (env[key] === "true") resultEnv[key] = true;
    if (env[key] === "false") resultEnv[key] = false;
    if (key === "VITE_PORT") resultEnv[key] = Number(env[key]);
    if (key === "VITE_COMPRESSION") resultEnv[key] = JSON.parse(env[key]);
  }
  return resultEnv;
}
