import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { signOut } from "@/services/user";
import { setAccessToken } from "@/apis/API";
import { queryKeys } from "@/react-query/constants";
import { authState } from "@/recoil/auth";
import useCustomToast from "./useCustomToast";

/**
 * 로그아웃 hook
 * @returns 로그아웃 핸들러 반환
 */
export const useSignOut = () => {
  const navigate = useNavigate();
  const [, setIsAuth] = useRecoilState(authState);

  const { mutate } = useMutation(queryKeys.user, signOut, {
    onError: () => {
      useCustomToast("error", "다시 시작해서 로그인 해주세요");
    },
    onSuccess: () => {
      useCustomToast("success", "로그아웃 성공!");
      setIsAuth(false);
      setAccessToken("");
      navigate({
        pathname: "/",
      });
    },
  });

  const handleSignOut = () => {
    mutate();
  };

  return { handleSignOut };
};
