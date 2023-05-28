import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { authState } from "@/recoil/auth";
import { refreshToken } from "@/services/user";
import { queryKeys } from "@/react-query/constants";
import { useHandleModal } from "./useHandleModal";

/**
 * 새로고침시 토큰 다시 받아오는 hook
 */
export const useRefreshToken = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useRecoilState(authState);
  const { handleOpenModal } = useHandleModal();

  const { refetch } = useQuery(queryKeys.user, refreshToken, {
    enabled: false,
    onSuccess: () => {
      setIsAuth(true);
    },
    onError: () => {
      handleOpenModal(false, "다시 로그인 헤주세요");
      navigate({
        pathname: "/signin",
      });
    },
  });

  useEffect(() => {
    if (!isAuth) refetch();
  }, []);
};
