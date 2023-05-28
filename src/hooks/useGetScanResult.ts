import { AxiosError } from "axios";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { scanQrCode } from "@/services/scan";
import { queryKeys } from "@/react-query/constants";
import { CommonResponse } from "@/apis/types";
import useCustomToast from "./useCustomToast";

/**
 * 스캔 결과값을 받아오는 hooks, 만약 값 있다? 값 반환, 유효하지않은 qr, 니꺼아님
 * @params 스캔한 코드 값
 * @returns info 리스트
 */
export const useScanQrCode = () => {
  const [result, setResult] = useState("");

  const { mutate } = useMutation(queryKeys.scan, scanQrCode, {
    onError: (error: AxiosError<CommonResponse<any>>) => {
      useCustomToast("error", error.response?.data.message);
    },
    onSuccess() {
      useCustomToast("success", "스캔 성공!");
    },
  });

  const handleScan = (result: string | null) => {
    if (result) {
      setResult(result);
      mutate({ qrId: result });
    }
  };

  return { handleScan, result };
};
