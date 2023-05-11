import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/services/user";
import { queryKeys } from "@/react-query/constants";

/**
 * 회원가입 hook
 * @returns 회원가입 핸들러 반환
 */
export const useSignUp = () => {
  const navigate = useNavigate();

  const { mutate: handleSignUp, isLoading } = useMutation(
    queryKeys.user,
    signUp
  );

  // todo isLoading -> isSuccess
  useEffect(() => {
    if (isLoading)
      navigate({
        pathname: "/signin",
      });
  }, [isLoading]);

  return { handleSignUp };
};
