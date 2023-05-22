import Spinner from "@/assets/spinner.gif";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import * as style from "./Loading.style";

const Loading = () => {
  const isFetching = !useIsFetching(); // fetching중인지
  const isMutating = !useIsMutating(); // Mutating 중인지
  const display = !isFetching || !isMutating ? true : false;

  return (
    <style.Wrapper isActivate={display}>
      <style.Img src={Spinner} />
    </style.Wrapper>
  );
};

export default Loading;
