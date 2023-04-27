import { ChangeEvent } from "react";
import { InfoType } from "@/pages/Info";
import StateRadioBtn from "@/components/pages/info/state-radio-btn";
import InfoContent from "@/components/pages/info/info-content";
import * as style from "./InfoTemplate.style";

const RADIO_LIST = [
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
          {RADIO_LIST.map((radio) => (
            <StateRadioBtn
              text={radio.text}
              inputValue={radio.inputValue}
              onChange={onChange}
              selected={radioValue}
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
          />
        ))}
      </style.InfoBox>
    </style.Wrapper>
  );
};

export default InfoTemplate;
