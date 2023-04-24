import { Outlet } from "react-router-dom";
import * as style from "./Layout.style";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = () => {
  return (
    <style.Wrapper>
      <Outlet />
    </style.Wrapper>
  );
};

export default Layout;
