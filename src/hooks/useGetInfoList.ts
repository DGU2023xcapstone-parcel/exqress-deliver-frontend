import { useRecoilState } from "recoil";
import { ChangeEvent, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getInfoList } from "@/services/info";
import { CustomAxiosErrorType } from "@/types/api";
import { queryKeys } from "@/react-query/constants";
import { authState } from "@/recoil/auth";
import useCustomToast from "./useCustomToast";
/**
 * 정보 페이지에 필요한 hook
 * @returns 정보 페이지에 필요한 로직들 {라디오 버튼 값, 정보 리스트, 라디오 버튼 변경 핸들러}
 */

export const useGetInfoList = () => {
  const [isAuth] = useRecoilState(authState);
  const [radioValue, setRadioValue] = useState("all");

  const { data = [], refetch } = useQuery(queryKeys.info, getInfoList, {
    enabled: false,
    onError: (error: CustomAxiosErrorType) => {
      useCustomToast("error", error.response?.data.message);
    },
    onSuccess() {
      useCustomToast("success", "정보를 불러왔습니다!");
    },
  });

  const infoList = data.filter((info) =>
    radioValue === "all"
      ? true
      : radioValue === "complete"
      ? info.isComplete === "complete"
      : info.isComplete === "start"
  );

  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };

  useEffect(() => {
    if (isAuth) {
      refetch();
    }
  }, [isAuth]);

  return { infoList, radioValue, handleRadio, refetchInfo: refetch };
};
