import axios from "axios";

import { setToken } from "@/stores/modules/user";
import { store } from "@/stores/index.ts";
import { message as messageNotice } from "@/hooks/useMessage";

import { ResponseStatusEnum } from "@/enum/axiosEnum";
import { LOGINPATH } from "@/constants/config.ts";

import type { ResponseType } from "@/api/interface";
import type { AxiosError, AxiosResponse, AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { checkStatus } from "@/api/helper/checkStatus.ts";

const config = {
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  timeout: 30000,
  withCredentials: false
};

class RequestHttp {
  service: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    // 创建axios实例
    this.service = axios.create(config);

    // 请求拦截器
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (config.headers && typeof config.headers.set === "function") {
          config.headers.set("x-access-token", store.getState().user.token);
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response;
        // 登录过期
        if (data.code === ResponseStatusEnum.OVERDUE) {
          store.dispatch(setToken(""));
          window.$navigate(LOGINPATH);
          return Promise.reject(data);
        }
        // 业务层级错误码
        if (data.code && data.code !== ResponseStatusEnum.SUCCESS) {
          return Promise.reject(data);
        }
        return data;
      },
      (error: AxiosError) => {
        const { response, message } = error;
        if (message.includes("timeout")) messageNotice.error("请求超时！请您稍后重试");
        if (message.includes("Network Error")) messageNotice.error("网络错误！请您稍后重试");
        if (response) checkStatus(response.status);
        if (!window.navigator.onLine) window.$navigate("/500"); // 离线
        return Promise.reject(error);
      }
    );
  }

  get<T>(url: string, params?: object, config: AxiosRequestConfig = {}): Promise<ResponseType<T>> {
    return this.service.get(url, { params, ...config });
  }
  post<T>(url: string, params?: object | string, config: AxiosRequestConfig = {}): Promise<ResponseType<T>> {
    return this.service.post(url, params, config);
  }
  put<T>(url: string, params?: object, config: AxiosRequestConfig = {}): Promise<ResponseType<T>> {
    return this.service.put(url, params, config);
  }
  delete<T>(url: string, params?: object, config: AxiosRequestConfig = {}): Promise<ResponseType<T>> {
    return this.service.delete(url, { params, ...config });
  }
}

export default new RequestHttp(config);
