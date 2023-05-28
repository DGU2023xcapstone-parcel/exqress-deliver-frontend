import { InfoType } from "@/types/info";
import { getAuthApi, postAuthApi } from "@/apis/authApi";

/**
 * infoList 받아오는 api
 * @returns info 리스트
 */
export const getInfoList = async () => {
  const response = await getAuthApi<InfoType[]>("/parcels");

  return response.data;
};

/**
 * 해당 택배 배달 완료 시키는 api
 * @param props 운송장 번호
 * @returns 베송완료
 */
export const completeDeliver = async (props: Pick<InfoType, "invoiceNo">) => {
  const response = await postAuthApi<null, Pick<InfoType, "invoiceNo">>(
    "qr/complete",
    props
  );

  return response;
};
