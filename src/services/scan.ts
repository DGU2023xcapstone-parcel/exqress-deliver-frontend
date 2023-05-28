import { ScanType } from "@/types/scan";
import { postAuthApi } from "@/apis/authApi";

/**
 * scan후 배송시작 처리 시키는 api
 * @params 스캔한 코드 값
 * @returns 처리 완료
 */
export const scanQrCode = async (props: ScanType) => {
  const response = await postAuthApi<null, ScanType>("/qr/ready", props);

  return response;
};
