import { ChangeEvent, useEffect, useRef, useState } from "react";
import InfoTemplate from "@/components/template/info";
import { useGetInfoList } from "@/hooks/useGetInfoList";

const Info = () => {
  const [radioValue, setRadioValue] = useState("all");
  const { data } = useGetInfoList();
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollable, setScrollable] = useState(false);

  const infoList = data.filter((info) =>
    radioValue === "all" ? true : radioValue === info.state
  );

  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };

  useEffect(() => {
    const contentEl = contentRef.current;
    if (contentEl!.scrollHeight > contentEl!.offsetHeight) {
      setScrollable(true);
    } else {
      setScrollable(false);
    }
  }, [radioValue]);

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
