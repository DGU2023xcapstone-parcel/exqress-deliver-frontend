import { ChangeEvent, useState } from "react";

import InfoTemplate from "@/components/template/info";
import { useGetInfoList } from "@/hooks/useGetInfoList";
import { useScroll } from "@/hooks/useScroll";
import { useRefreshToken } from "@/hooks/useRefreshToken";
import { useCompleteDeliver } from "@/hooks/useCompleteDeliver";

const Info = () => {
  const [radioValue, setRadioValue] = useState("all");

  const { data } = useGetInfoList();
  const { handleCompleteDeliver } = useCompleteDeliver();
  const { isScrollable, contentRef } = useScroll(radioValue);
  useRefreshToken();

  const infoList = data.filter((info) =>
    radioValue === "all"
      ? true
      : radioValue === "done"
      ? info.isComplete === "true"
      : info.isComplete === "false"
  );

  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };

  return (
    <InfoTemplate
      contentRef={contentRef}
      isScroll={isScrollable}
      radioValue={radioValue}
      onChange={handleRadio}
      infoList={infoList}
      onClick={handleCompleteDeliver}
    />
  );
};

export default Info;
