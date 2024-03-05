/* Vite */
declare interface ViteEnvType {
  VITE_NODE_ENV: "development" | "test" | "production";
  VITE_APP_TITLE: string;
  VITE_PORT: number;
  VITE_OPEN: boolean;
  VITE_PUBLIC_PATH: string;
  VITE_DROP_CONSOLE: boolean;
}
