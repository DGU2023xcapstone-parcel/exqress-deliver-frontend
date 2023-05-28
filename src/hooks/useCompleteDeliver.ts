import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "@/react-query/constants";

import { completeDeliver } from "@/services/info";
import { InfoType } from "@/types/info";
import { CustomAxiosErrorType } from "@/types/api";
import useCustomToast from "./useCustomToast";

/**
 * 배송완료 처리 hook
 * @returns 배송완료 처리 핸들러 반환
 */
export const useCompleteDeliver = () => {
  const { mutate } = useMutation(queryKeys.user, completeDeliver, {
    onError: (error: CustomAxiosErrorType) => {
      useCustomToast("error", error.response?.data.message);
    },
    onSuccess() {
      useCustomToast("success", "배송완료처리 되었습니다!");
    },
  });

  const handleCompleteDeliver = (props: Pick<InfoType, "invoiceNo">) => {
    console.log(props);
    mutate(props);
  };

  return { handleCompleteDeliver };
};
