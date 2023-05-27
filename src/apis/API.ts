import axios, { isAxiosError } from "axios";
import { API_URL } from "@/constants/url";
import { CommonResponse, CustomAxiosInterface } from "./types";

/**
 * accessToken을 axios 헤더에 담는 함수
 * @param token accessToken
 * @param authState 로그인상태 어떻게 할지
 */
export const setAccessToken = (token: string) => {
  authApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  console.log(API_URL);
};
/**
 * axios error 핸들링
 * @param error axios 에러 혹은 알수없는 에러
 * @param error 에러 객체 반환
 */
const onError = (error: any) => {
  if (isAxiosError<CommonResponse<any>>(error)) {
    const { status, message } = error.response!.data;
    switch (status) {
      // 그냥 데이터 문제
      case "400":
        console.log(message);
        break;
      // 권한 x
      case "401":
        setAccessToken("");
        console.log(message);
        break;
      // 이미 존재
      case "409":
        console.log(message);
        break;
      case "500":
        // 서버 문제
        console.log(message);
        break;
      default:
        console.log("알수없는 문제 발생");
        break;
    }
  } else {
    // 여긴 그냥 문제
    console.log("알수없는 문제 발생");
  }
  console.log(`ERROR: ${error}`);
  return Promise.reject(error);
};

/** 인가를 확인해햐 하는 api*/
export const authApi: CustomAxiosInterface = axios.create({
  baseURL: API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
authApi.interceptors.response.use((response) => {
  const { accessToken } = response.data;
  console.log(`Call AUTH API = `, response.data.accessToken);

  if (accessToken) {
    console.log(`SET TOKEN ${accessToken}`);
    setAccessToken(accessToken);
  }

  return response;
}, onError);

/** 인가가 필요없는 api */
export const publicApi: CustomAxiosInterface = axios.create({
  baseURL: API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
publicApi.interceptors.response.use((response) => {
  console.log(`Call PUBLIC API = `, response);
  return response;
}, onError);
