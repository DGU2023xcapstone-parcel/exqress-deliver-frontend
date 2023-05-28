import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { signUp } from "@/services/user";
import { queryKeys } from "@/react-query/constants";
import { SignUpInputType } from "@/types/sign";
import { CommonResponse } from "@/apis/types";
import useCustomToast from "./useCustomToast";

/**
 * 회원가입 hook
 * @returns 회원가입 핸들러 반환
 */
export const useSignUp = (props: SignUpInputType) => {
  const navigate = useNavigate();

  const { mutate } = useMutation(queryKeys.user, signUp, {
    onError: (error: AxiosError<CommonResponse<any>>) => {
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
