import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "@/react-query/constants";

import { completeDeliver } from "@/services/info";
import { InfoType } from "@/types/info";
import { CustomAxiosErrorType } from "@/types/api";
import useCustomToast from "./useCustomToast";
import { useGetInfoList } from "./useGetInfoList";

/**
 * 배송완료 처리 hook
 * @returns 배송완료 처리 핸들러 반환
 */
export const useCompleteDeliver = () => {
  const { refetchInfo } = useGetInfoList();
  const { mutate } = useMutation(queryKeys.user, completeDeliver, {
    onError: (error: CustomAxiosErrorType) => {
      useCustomToast("error", error.response?.data.message);
    },
    onSuccess() {
      useCustomToast("success", "배송완료처리 되었습니다!");
      refetchInfo();
    },
  });

  const handleCompleteDeliver = (props: Pick<InfoType, "invoiceNo">) => {
    mutate(props);
  };

  return { handleCompleteDeliver };
};
