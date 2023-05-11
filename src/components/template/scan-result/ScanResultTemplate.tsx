import { InfoType } from "@/types/info";
import ResultList from "@/components/pages/scan/result-list";
import * as style from "./ScanResultTemplate.style";

export interface ScanResultTemplateProps {
  infoData: InfoType;
}
const ScanResultTemplate = ({ infoData }: ScanResultTemplateProps) => (
  <style.Wrapper>
    <ResultList infoData={infoData} />
  </style.Wrapper>
);

export default ScanResultTemplate;
