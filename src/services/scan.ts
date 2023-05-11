import { InfoType } from "@/types/info";
import { ScanType } from "@/types/scan";
import { getAuthApi } from "@/apis/authApi";

/**
 * scan후 값 받아오는 api
 * @params 스캔한 코드 값
 * @returns info 리스트
 */
export const getScanResult = async (props: ScanType) => {
  const response = await getAuthApi<InfoType>("/scan", {
    params: { code: props },
  });

  return response;
};
