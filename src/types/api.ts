import {
  AxiosError,
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

export type CommonResponse<T> = {
  status: string;
  message: string;
  data: T;
  accessToken: string;
};

export interface CustomAxiosInterface extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<CommonResponse<any>>>;
  };
}

export type CustomAxiosErrorType = AxiosError<CommonResponse<any>>;
