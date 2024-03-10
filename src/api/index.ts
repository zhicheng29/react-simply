import axios from "axios";
import { useDispatch } from "react-redux";

import { setToken } from "@/store/modules/user";

import { ResponseStatusEnum } from "@/enum/axiosEnum";

import type { ResponseType } from "@/api/interface";
import type { AxiosResponse, AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

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
          const dispatch = useDispatch();
          dispatch(setToken(""));
          return Promise.reject(data);
        }
        // 业务层级错误码
        if (data.code && data.code !== ResponseStatusEnum.SUCCESS) {
          return Promise.reject(data);
        }
        return data;
      },
      error => {
        console.log(error);
        return Promise.reject(error);
      }
    );
  }

  get<T>(url: string, params: object, config: AxiosRequestConfig = {}): Promise<ResponseType<T>> {
    return this.service.get(url, { params, ...config });
  }
  post<T>(url: string, params: object | string, config: AxiosRequestConfig = {}): Promise<ResponseType<T>> {
    return this.service.post(url, params, config);
  }
  put<T>(url: string, params: object, config: AxiosRequestConfig = {}): Promise<ResponseType<T>> {
    return this.service.put(url, params, config);
  }
  delete<T>(url: string, params: object, config: AxiosRequestConfig = {}): Promise<ResponseType<T>> {
    return this.service.delete(url, { params, ...config });
  }
}

export default new RequestHttp(config);
