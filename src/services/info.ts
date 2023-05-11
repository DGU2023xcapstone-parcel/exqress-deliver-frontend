import { InfoType } from "@/types/info";
import { getAuthApi } from "@/apis/authApi";

/**
 * infoList 받아오는 api
 * @returns info 리스트
 */
export const getInfoList = async () => {
  const response = await getAuthApi<InfoType[]>("/info");

  return response;
};
