import ScanResultTemplate from "@/components/template/scan-result";
import { resultType } from "@/types/types";

const MOCKLIST: resultType = {
  id: "482299",
  company: "CJ 대한통운",
  info: "데일리 트레이닝",
  sender: "이규호",
  receiver: "김재한",
  deliver: "신현식",
};
const ScanResult = () => {
  return <ScanResultTemplate resultList={MOCKLIST} />;
};

export default ScanResult;
