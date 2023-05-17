import { Outlet } from "react-router-dom";
import * as style from "./Layout.style";
// import { useRefreshToken } from "@/hooks/useRefreshToken";

const Layout = () => {
  // useRefreshToken();

  return (
    <style.Wrapper>
      <Outlet />
    </style.Wrapper>
  );
};

export default Layout;
