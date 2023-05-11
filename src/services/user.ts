import {
  SignInInputType,
  SignInOutputType,
  SignUpInputType,
} from "@/types/sign";
import { postPublicApi } from "@/apis/publicApi";
import { getAuthApi, postAuthApi } from "@/apis/authApi";

/**
 * 회원가입
 * @param id 아이디
 * @param password 비밀번호
 * @param name 이름
 * @param company 택배 회사
 * @param phone 핸드폰
 * @param email 이메일
 * @returns 가입 성공 시 success, 실패 시 에러 반환 (1001, 500 등)
 */
export const signUp = async (props: SignUpInputType) => {
  const response = await postPublicApi<undefined, SignUpInputType>(
    "/signup",
    props
  );

  return response;
};

/**
 * 로그인
 * @param id 아이디
 * @param password 비밀번호
 * @returns 성공 시 JWT 액세스 토큰 인계, 실패 시 에러 객체 반환
 */
export const signIn = async (props: SignInInputType) => {
  const response = await postAuthApi<SignInOutputType, SignInInputType>(
    "/signin",
    { ...props }
  );

  return response;
};

/**
 * 로그아웃
 * @returns 성공 시 header 비움
 */
export const signOut = async () => {
  const response = await postAuthApi<undefined, undefined>("/signout");

  return response;
};

/**
 * 토큰 재발급
 * @returns 성공 시
 */
export const refreshToken = async () => {
  const response = await getAuthApi<SignInOutputType>("/refresh");

  return response;
};
