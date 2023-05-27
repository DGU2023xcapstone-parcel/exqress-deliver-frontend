import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "@/react-query/constants";

import { completeDeliver } from "@/services/info";
import { InfoType } from "@/types/info";

/**
 * 회원가입 hook
 * @returns 회원가입 핸들러 반환
 */
export const useCompleteDeliver = () => {
  const { mutate } = useMutation(queryKeys.user, completeDeliver);

  const handleCompleteDeliver = (props: Pick<InfoType, "invoiceNo">) => {
    console.log(props);
    mutate(props);
  };

  return { handleCompleteDeliver };
};
