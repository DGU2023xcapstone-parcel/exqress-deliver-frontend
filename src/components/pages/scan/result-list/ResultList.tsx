import ListContent from "@/components/pages/scan/list-content/ListContent";
import { ScanResultTemplateProps } from "@/components/template/scan-result/ScanResultTemplate";
import * as style from "./ResultList.style";

const ResultList = ({
  infoData,
}: Pick<ScanResultTemplateProps, "infoData">) => (
  <style.Wrapper>
    <style.Title>택배정보</style.Title>
    <style.Box>
      <ListContent title={"운송장 번호"} content={infoData.invoiceNo} />
      <ListContent title={"택배회사"} content={infoData.company} />
      <ListContent title={"상품정보"} content={infoData.productName} />
      <ListContent title={"보내는 분"} content={infoData.sender} />
      <ListContent title={"받는 분"} content={infoData.receiver} />
      <ListContent title={"배송기사"} content={infoData.deliver} />
    </style.Box>
  </style.Wrapper>
);

export default ResultList;
