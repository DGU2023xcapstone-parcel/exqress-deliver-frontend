import { ChangeEvent, useState } from "react";
import InfoTemplate from "@/components/template/info";
import { useGetInfoList } from "@/hooks/useGetInfoList";

const Info = () => {
  const [radioValue, setRadioValue] = useState("all");
  const { data } = useGetInfoList();
  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };

  const infoList = data.filter((info) =>
    radioValue === "all" ? true : radioValue === info.state
  );
  console.log(infoList);
  return (
    <InfoTemplate
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
