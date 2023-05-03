import { Link } from "react-router-dom";
import * as style from "./Navigation.style";
import QrCode from "@/assets/qrCode.svg";
import SignOut from "@/assets/signOut.svg";
import Truck from "@/assets/truck.svg";

const Navigation = () => (
  <style.Wrapper>
    <Link to="/info">
      <style.Img src={Truck} />
    </Link>
    <Link to="/scan">
      <style.Img src={QrCode} />
    </Link>
    <Link to="/signin">
      <style.Img src={SignOut} />
    </Link>
  </style.Wrapper>
);

export default Navigation;
