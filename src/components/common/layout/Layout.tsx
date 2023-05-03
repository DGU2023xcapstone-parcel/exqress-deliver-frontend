// import { useRecoilState } from "recoil";
import { Outlet } from "react-router-dom";
// import { authState } from "@/recoil/auth";
import Navigation from "@/components/common/navigation";
import * as style from "./Layout.style";

const Layout = () => {
  // const [isauth] = useRecoilState(authState);

  return (
    <style.Wrapper>
      <Outlet />
      <Navigation />
      {/* {isauth && <Navigation />} */}
    </style.Wrapper>
  );
};

export default Layout;
