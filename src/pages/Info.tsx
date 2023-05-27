import { ChangeEvent, useState } from "react";

import InfoTemplate from "@/components/template/info";
import { useGetInfoList } from "@/hooks/useGetInfoList";
import { useHandleScroll } from "@/hooks/useHandleScroll";
import { useRefreshToken } from "@/hooks/useRefreshToken";
import { useCompleteDeliver } from "@/hooks/useCompleteDeliver";

const Info = () => {
  const [radioValue, setRadioValue] = useState("all");
  const { data } = useGetInfoList();
  const { handleCompleteDeliver } = useCompleteDeliver();
  const { scrollable, contentRef } = useHandleScroll(radioValue);

  const infoList = data.filter((info) =>
    radioValue === "all"
      ? true
      : radioValue === "done"
      ? info.isComplete === "true"
      : info.isComplete === "false"
  );

  useRefreshToken();
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
      onClick={handleCompleteDeliver}
    />
  );
};

export default Info;
