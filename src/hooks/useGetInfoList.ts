import { useQuery } from "@tanstack/react-query";

import { getInfoList } from "@/services/info";
import { queryKeys } from "@/react-query/constants";

/**
 * 현재 로그인한 기사의 택배 리스트 불러오는 hook
 * @returns info 리스트
 */
export const useGetInfoList = () => {
  const { data = [] } = useQuery(queryKeys.info, getInfoList, {
    enabled: true,
  });
  console.log(data);
  return {
    data,
  };
};
