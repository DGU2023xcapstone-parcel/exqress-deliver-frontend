import { useScroll } from "@/hooks/useScroll";
import { useGetInfoList } from "@/hooks/useGetInfoList";
import { useCompleteDeliver } from "@/hooks/useCompleteDeliver";
import InfoTemplate from "@/components/template/info";
import { useRefreshToken } from "@/hooks/useRefreshToken";

const Info = () => {
  useRefreshToken();

  const { infoList, radioValue, handleRadio } = useGetInfoList();
  const { handleCompleteDeliver } = useCompleteDeliver();
  const { isScrollable, contentRef } = useScroll();

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
