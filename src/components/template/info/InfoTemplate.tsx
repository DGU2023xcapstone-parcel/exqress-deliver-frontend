import { ChangeEvent } from "react";
import { InfoType } from "@/pages/Info";
import StateRadioBtn from "@/components/pages/info/state-radio-btn";
import InfoContent from "@/components/pages/info/info-content";
import * as style from "./InfoTemplate.style";

const STATE_LIST = [
  { text: "전체", inputValue: "all" },
  { text: "배송완료", inputValue: "finish" },
  { text: "배송시작", inputValue: "start" },
];

export interface InfoTemplateProps {
  radioValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  infoList: InfoType[];
  onClick: () => void;
}
const InfoTemplate = ({
  radioValue,
  infoList,
  onClick,
  onChange,
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
      <style.InfoBox>
        {infoList.map((info) => (
          <InfoContent
            date={info.date}
            productName={info.productName}
            invoiceNo={info.invoiceNo}
            name={info.name}
            company={info.company}
            onClick={onClick}
            key={info.invoiceNo}
          />
        ))}
      </style.InfoBox>
    </style.Wrapper>
  );
};

export default InfoTemplate;
