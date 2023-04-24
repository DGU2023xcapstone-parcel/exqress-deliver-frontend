import { Outlet } from "react-router-dom";
import * as style from "./Layout.style";

const Layout = () => {
  return (
    <style.Wrapper>
      <Outlet />
    </style.Wrapper>
  );
};

export default Layout;
