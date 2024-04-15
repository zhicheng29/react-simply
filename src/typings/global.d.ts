/* Vite */
declare interface ViteEnvType {
  VITE_ROUTER_MODE: "hash" | "history";
  VITE_NODE_ENV: "development" | "test" | "staging" | "production";
  VITE_COMPRESSION: ("gzip" | "brotli" | "none")[];
  VITE_PORT: number;
  VITE_APP_TITLE: string;
  VITE_PUBLIC_PATH: string;
  VITE_OPEN: boolean;
  VITE_REPORT: boolean;
  VITE_DROP_CONSOLE: boolean;
}

interface ImportMetaEnv extends ViteEnvType {
  __: unknown;
}
