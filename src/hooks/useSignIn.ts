import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/services/user";
import { authState } from "@/recoil/auth";
import { queryKeys } from "@/react-query/constants";
import { SignInInputType } from "@/types/sign";

/**
 * 로그인 요청하는 hook
 * @returns 로그인 핸들러 반환
 */
export const useSignIn = (props: SignInInputType) => {
  const navigate = useNavigate();
  const [, setIsAuth] = useRecoilState(authState);

  const { mutate, isSuccess } = useMutation(queryKeys.user, signIn);

  const handleSignIn = () => {
    mutate(props);
  };

  // todo isLoading -> isSuccess
  useEffect(() => {
    if (isSuccess) {
      setIsAuth(true);
      navigate({
        pathname: "/",
      });
    }
  }, [isSuccess]);

  return { handleSignIn };
};
