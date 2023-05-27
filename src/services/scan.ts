import { ScanType } from "@/types/scan";
import { postAuthApi } from "@/apis/authApi";

/**
 * scan후 값 받아오는 api
 * @params 스캔한 코드 값
 * @returns info 리스트
 */
export const scanQrCode = async (props: ScanType) => {
  const response = await postAuthApi<any, ScanType>("/scan", props);

  return response;
};
