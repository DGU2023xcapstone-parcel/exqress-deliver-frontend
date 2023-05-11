import { useQuery } from "@tanstack/react-query";
import { INFO_LIST } from "../mock";
import { getInfoList } from "@/services/info";
import { queryKeys } from "@/react-query/constants";

/**
 * 현재 로그인한 기사의 택배 리스트 불러오는 hook
 * @returns info 리스트
 */
export const useGetInfoList = () => {
  const {
    // data = INFO_LIST,
    // isLoading,
    // isSuccess,
    // isError,
  } = useQuery(queryKeys.info, getInfoList, { enabled: false });

  return {
    data: INFO_LIST,
    // , isLoading, isSuccess, isError
  };
};
