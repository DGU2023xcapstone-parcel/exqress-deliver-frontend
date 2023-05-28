import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

import { getInfoList } from "@/services/info";
import { queryKeys } from "@/react-query/constants";
import { CommonResponse } from "@/apis/types";
import useCustomToast from "./useCustomToast";

/**
 * 현재 로그인한 기사의 택배 리스트 불러오는 hook
 * @returns info 리스트
 */
export const useGetInfoList = () => {
  const { data = [] } = useQuery(queryKeys.info, getInfoList, {
    enabled: true,
    onError: (error: AxiosError<CommonResponse<any>>) => {
      useCustomToast("error", error.response?.data.message);
    },
    onSuccess() {
      useCustomToast("success", "정보를 불러왔습니다!");
    },
  });

  return {
    data,
  };
};
