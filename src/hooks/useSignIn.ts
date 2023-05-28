import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { signIn } from "@/services/user";
import { authState } from "@/recoil/auth";
import { SignInInputType } from "@/types/sign";
import { queryKeys } from "@/react-query/constants";
import { CustomAxiosErrorType } from "@/types/api";
import useCustomToast from "./useCustomToast";

/**
 * 로그인 input 값
 * @param props 로그인 input
 * @returns 로그인 핸들러
 */
export const useSignIn = (props: SignInInputType) => {
  const navigate = useNavigate();
  const [, setIsAuth] = useRecoilState(authState);

  const { mutate } = useMutation(queryKeys.user, signIn, {
    onError: (error: CustomAxiosErrorType) => {
      console.log(error);
      useCustomToast("error", error.response?.data.message);
    },
    onSuccess() {
      useCustomToast("success", "로그인 성공!");
      setIsAuth(true);
      navigate({
        pathname: "/",
      });
    },
  });

  const handleSignIn = () => {
    mutate(props);
  };

  return { handleSignIn };
};
