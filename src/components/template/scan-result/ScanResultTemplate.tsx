import ResultList from "@/components/pages/scan/result-list";
import { resultType } from "@/pages/ScanResult";
import * as style from "./ScanResultTemplate.style";

interface ScanResultTemplateProps {
  resultList: resultType;
}
const ScanResultTemplate = ({ resultList }: ScanResultTemplateProps) => {
  return (
    <style.Wrapper>
      <ResultList resultList={resultList} />
    </style.Wrapper>
  );
};

export default ScanResultTemplate;
