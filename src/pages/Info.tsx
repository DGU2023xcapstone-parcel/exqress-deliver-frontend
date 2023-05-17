import { ChangeEvent, useState } from "react";
import InfoTemplate from "@/components/template/info";
import { useGetInfoList } from "@/hooks/useGetInfoList";
import { useHandleScroll } from "../hooks/useHandleScroll";

const Info = () => {
  const [radioValue, setRadioValue] = useState("all");
  const { data } = useGetInfoList();
  const { scrollable, contentRef } = useHandleScroll(radioValue);

  const infoList = data.filter((info) =>
    radioValue === "all" ? true : radioValue === info.state
  );

  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };

  return (
    <InfoTemplate
      contentRef={contentRef}
      isScroll={scrollable}
      radioValue={radioValue}
      onChange={handleRadio}
      infoList={infoList}
      onClick={() => {
        console.log("send");
      }}
    />
  );
};

export default Info;
