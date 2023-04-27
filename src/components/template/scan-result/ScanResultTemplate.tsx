import ResultList from "@/components/pages/scan/result-list";
import { resultType } from "@/types/types";
import * as style from "./ScanResultTemplate.style";

export interface ScanResultTemplateProps {
  resultList: resultType;
}
const ScanResultTemplate = ({ resultList }: ScanResultTemplateProps) => (
  <style.Wrapper>
    <ResultList resultList={resultList} />
  </style.Wrapper>
);

export default ScanResultTemplate;
