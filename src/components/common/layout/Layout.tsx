import { Outlet } from "react-router-dom";
import * as style from "./Layout.style";
import { useRecoilState } from "recoil";
import { authState } from "@/recoil/auth";
import Navigation from "@/components/common/navigation";

const Layout = () => {
  const [isauth] = useRecoilState(authState);

  return (
    <style.Wrapper>
      <Outlet />
      {isauth && <Navigation />}
    </style.Wrapper>
  );
};

export default Layout;
