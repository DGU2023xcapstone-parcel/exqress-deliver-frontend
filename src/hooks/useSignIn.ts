import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/services/user";
import { authState } from "@/recoil/auth";
import { queryKeys } from "@/react-query/constants";

/**
 * 로그인 요청하는 hook
 * @returns 로그인 핸들러 반환
 */
export const useSignIn = () => {
  const navigate = useNavigate();
  const [, setIsAuth] = useRecoilState(authState);

  const { mutate: handleSignIn, isLoading } = useMutation(
    queryKeys.user,
    signIn
  );

  // todo isLoading -> isSuccess
  useEffect(() => {
    if (isLoading) {
      setIsAuth(true);
      navigate({
        pathname: "/",
      });
    }
  }, [isLoading]);

  return { handleSignIn };
};
