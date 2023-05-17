import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/services/user";
import { queryKeys } from "@/react-query/constants";
import { SignUpInputType } from "@/types/sign";

/**
 * 회원가입 hook
 * @returns 회원가입 핸들러 반환
 */
export const useSignUp = (props: SignUpInputType) => {
  const navigate = useNavigate();

  const { mutate, isSuccess } = useMutation(queryKeys.user, signUp);

  const handleSignUp = () => {
    mutate(props);
  };

  // // todo isLoading -> isSuccess
  useEffect(() => {
    if (isSuccess)
      navigate({
        pathname: "/signin",
      });
  }, [isSuccess]);

  return { handleSignUp };
};
