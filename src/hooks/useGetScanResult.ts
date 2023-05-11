import { useQuery } from "@tanstack/react-query";
import { ScanType } from "@/types/scan";
import { getScanResult } from "@/services/scan";
import { queryKeys } from "@/react-query/constants";
import { INFO_LIST } from "../mock";

/**
 * 스캔 결과값을 받아오는 hooks, 만약 값 있다? 값 반환, 유효하지않은 qr, 니꺼아님
 * @params 스캔한 코드 값
 * @returns info 리스트
 */
export const useGetScanResult = (props: ScanType) => {
  const {
    // data = INFO_LIST[0],
    // refetch,
    // isLoading,
    // isSuccess,
    // isError,
  } = useQuery(queryKeys.scan, () => getScanResult(props), {
    // enabled로 code값이 있을때만 요청하도록
    enabled: false,
    // !!props.code,
  });

  // todo isLoading -> isSuccess
  // useEffect(() => {
  //   console.log(!!props.code);
  //   if (isLoading && !!props.code) {
  //     navigate("/scan/result", {
  //       state: {
  //         infoData: data,
  //       },
  //     });
  //   }
  // }, [isLoading, props.code]);

  return { data: INFO_LIST[0] };
};
