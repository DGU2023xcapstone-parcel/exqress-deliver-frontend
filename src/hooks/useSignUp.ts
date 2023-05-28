import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { signUp } from "@/services/user";
import { queryKeys } from "@/react-query/constants";
import { SignUpInputType } from "@/types/sign";
import { CustomAxiosErrorType } from "@/types/api";
import useCustomToast from "./useCustomToast";

/**
 * 회원가입 할때 사용하는 hook
 * @param props 회원가입 input 값
 * @returns 회원가입 핸들러
 */
export const useSignUp = (props: SignUpInputType) => {
  const navigate = useNavigate();

  const { mutate } = useMutation(queryKeys.user, signUp, {
    onError: (error: CustomAxiosErrorType) => {
      console.log(error);
      useCustomToast("error", error.response?.data.message);
    },
    onSuccess() {
      useCustomToast("success", "회원가입 성공");
      navigate({
        pathname: "/signin",
      });
    },
  });

  const handleSignUp = () => {
    mutate(props);
  };

  return { handleSignUp };
};
