import { ChangeEvent } from "react";
import Input from "@/components/common/input";
import * as style from "./SignInTemplate.style";
import MainLogo from "@/assets/mainLogo.svg";
import SubmitBtn from "../../pages/sign/submit-btn";
import SignupBtn from "../../pages/sign/signup-btn";

interface SignInTemplateProps {
  id: string;
  password: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}
const SignInTemplate = ({
  id,
  password,
  onChange,
  onClick,
}: SignInTemplateProps) => {
  return (
    <style.Wrapper>
      <img src={MainLogo} />
      <style.Box>
        <style.Inner>
          <Input
            value={id}
            name="id"
            placeHolder="아이디"
            sizeType="Big"
            onChange={onChange}
          />
          <Input
            value={password}
            name="password"
            placeHolder="비밀번호"
            sizeType="Big"
            onChange={onChange}
          />
        </style.Inner>
        <SubmitBtn text={"로그인"} onClick={onClick} />
      </style.Box>
      <SignupBtn />
    </style.Wrapper>
  );
};

export default SignInTemplate;
