import ListContent from "@/components/pages/scan/list-content/ListContent";
import { ScanResultTemplateProps } from "@/components/template/scan-result/ScanResultTemplate";
import * as style from "./ResultList.style";

const ResultList = ({ resultList }: ScanResultTemplateProps) => (
  <style.Wrapper>
    <style.Title>택배정보</style.Title>
    <style.Box>
      <ListContent title={"운송장 번호"} content={resultList.id} />
      <ListContent title={"택배회사"} content={resultList.company} />
      <ListContent title={"상품정보"} content={resultList.info} />
      <ListContent title={"보내는 분"} content={resultList.sender} />
      <ListContent title={"받는 분"} content={resultList.receiver} />
      <ListContent title={"배송기사"} content={resultList.deliver} />
    </style.Box>
  </style.Wrapper>
);

export default ResultList;
