import { ChangeEvent, RefObject } from "react";

import StateRadioBtn from "@/components/pages/info/state-radio-btn";
import InfoContent from "@/components/pages/info/info-content";
import { InfoType } from "@/types/info";
import { getDate } from "@/utils/date";
import * as style from "./InfoTemplate.style";

const STATE_LIST = [
  { text: "전체", inputValue: "all" },
  { text: "배송완료", inputValue: "complete" },
  { text: "배송시작", inputValue: "start" },
];

export interface InfoTemplateProps {
  radioValue: string;
  infoList: InfoType[];
  isScroll: boolean;
  contentRef: RefObject<HTMLDivElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (props: Pick<InfoType, "invoiceNo">) => void;
}
const InfoTemplate = ({
  radioValue,
  infoList,
  isScroll,
  contentRef,
  onChange,
  onClick,
}: InfoTemplateProps) => {
  return (
    <style.Wrapper>
      <style.TitleBox>
        <style.Title>배송 정보</style.Title>
        <style.Line />
        <style.RadioBox>
          {STATE_LIST.map((state) => (
            <StateRadioBtn
              text={state.text}
              inputValue={state.inputValue}
              onChange={onChange}
              selected={radioValue}
              key={state.inputValue}
            />
          ))}
        </style.RadioBox>
        <style.Line />
      </style.TitleBox>
      <style.InfoBox isScroll={isScroll} ref={contentRef}>
        {infoList.map((info) => (
          <InfoContent
            date={getDate(info.createdDate)}
            productName={info.productName}
            invoiceNo={info.invoiceNo}
            name={info.receiverName}
            phoneNumber={info.receiverPhoneNumber}
            isComplete={info.isComplete === "start"}
            address={info.address}
            onClick={onClick}
            key={info.invoiceNo}
          />
        ))}
      </style.InfoBox>
    </style.Wrapper>
  );
};

export default InfoTemplate;
