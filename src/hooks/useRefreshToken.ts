import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { authState } from "@/recoil/auth";
import { refreshToken } from "@/services/user";
import { queryKeys } from "@/react-query/constants";

/**
 * 새로고침시 토큰 다시 받아오는 hook
 */
export const useRefreshToken = () => {
  const isAuth = useRecoilState(authState);

  const { refetch } = useQuery(queryKeys.user, refreshToken, {
    enabled: false,
  });

  useEffect(() => {
    if (isAuth) refetch();
  }, []);
};
