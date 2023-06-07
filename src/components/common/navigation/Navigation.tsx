import { Link, useLocation } from "react-router-dom";

import { useSignOut } from "@/hooks/useSignOut";
import Truck from "@/assets/truck.svg";
import QrCode from "@/assets/qrCode.svg";
import SignOut from "@/assets/signOut.svg";
import * as style from "./Navigation.style";

const Navigation = () => {
  const { handleSignOut } = useSignOut();
  const location = useLocation();
  const isSign = location.pathname === "/" || location.pathname === "/signup";

  return (
    <>
      {!isSign && (
        <style.Wrapper>
          <Link to="/info">
            <style.Img src={Truck} />
          </Link>
          <Link to="/scan">
            <style.Img src={QrCode} />
          </Link>
          <div onClick={handleSignOut}>
            <style.Img src={SignOut} />
          </div>
        </style.Wrapper>
      )}
    </>
  );
};

export default Navigation;
