import { InfoType } from "@/types/info";
import { getAuthApi, postAuthApi } from "@/apis/authApi";

/**
 * infoList 받아오는 api
 * @returns info 리스트
 */
export const getInfoList = async () => {
  const response = await getAuthApi<InfoType[]>("/parcels");
  console.log(response);

  return response.data;
};

export const completeDeliver = async (props: Pick<InfoType, "invoiceNo">) => {
  const response = await postAuthApi<null, Pick<InfoType, "invoiceNo">>(
    "qr/complete",
    props
  );

  return response;
};
