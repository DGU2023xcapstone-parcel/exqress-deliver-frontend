import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "@/services/user";
import { authState } from "@/recoil/auth";
import { setAccessToken } from "@/apis/API";
import { queryKeys } from "@/react-query/constants";

/**
 * 로그아웃 hook
 * @returns 로그아웃 핸들러 반환
 */
export const useSignOut = () => {
  const navigate = useNavigate();
  const [, setIsAuth] = useRecoilState(authState);

  const { mutate, isLoading } = useMutation(queryKeys.user, signOut);

  const handleSignOut = () => {
    mutate();
  };

  // todo isLoading -> isSuccess
  useEffect(() => {
    if (isLoading) {
      setIsAuth(false);
      setAccessToken("");
      navigate({
        pathname: "/signin",
      });
    }
  }, [isLoading]);

  return { handleSignOut };
};
