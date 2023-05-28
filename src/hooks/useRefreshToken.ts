import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { authState } from "@/recoil/auth";
import { refreshToken } from "@/services/user";
import { queryKeys } from "@/react-query/constants";
import useCustomToast from "./useCustomToast";

/**
 * 새로고침시 토큰 다시 받아오는 hook
 */
export const useRefreshToken = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useRecoilState(authState);

  const { refetch } = useQuery(queryKeys.user, refreshToken, {
    enabled: false,
    onSuccess: () => {
      setIsAuth(true);
    },
    onError: () => {
      useCustomToast("error", "다시 로그인 해주세요.");
      navigate({
        pathname: "/signin",
      });
    },
  });

  useEffect(() => {
    if (!isAuth) refetch();
  }, []);
};
