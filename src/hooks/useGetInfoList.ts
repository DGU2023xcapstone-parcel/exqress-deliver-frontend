import { useQuery } from "@tanstack/react-query";
import { INFO_LIST } from "../mock";
import { getInfoList } from "@/services/info";
import { queryKeys } from "@/react-query/constants";

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
