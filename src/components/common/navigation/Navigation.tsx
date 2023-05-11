import { Link } from "react-router-dom";
import Truck from "@/assets/truck.svg";
import QrCode from "@/assets/qrCode.svg";
import SignOut from "@/assets/signOut.svg";
import { useSignOut } from "@/hooks/useSignOut";
import * as style from "./Navigation.style";

const Navigation = () => {
  const { handleSignOut } = useSignOut();

  return (
    <style.Wrapper>
      <Link to="/">
        <style.Img src={Truck} />
      </Link>
      <Link to="/scan">
        <style.Img src={QrCode} />
      </Link>
      <div onClick={handleSignOut}>
        <style.Img src={SignOut} />
      </div>
    </style.Wrapper>
  );
};

export default Navigation;
