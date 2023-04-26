import { Link } from "react-router-dom";
import * as style from "./Navigation.style";
import QrCode from "@/assets/qrCode.svg";
import SignOut from "@/assets/signOut.svg";
import Truck from "@/assets/truck.svg";

const Navigation = () => (
  <style.Wrapper>
    <Link to="/">
      <style.Img src={Truck} />
    </Link>
    <Link to="/">
      <style.Img src={QrCode} />
    </Link>
    <Link to="/">
      <style.Img src={SignOut} />
    </Link>
  </style.Wrapper>
);

export default Navigation;
