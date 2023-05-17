import { ChangeEvent } from "react";
import Input from "@/components/common/input";
import MainLogo from "@/assets/mainLogo.svg";
import { SignInInputType } from "@/types/sign";
import SubmitBtn from "@/components/pages/sign/submit-btn";
import SignupBtn from "@/components/pages/sign/signup-btn";
import * as style from "./SignInTemplate.style";

export interface SignInTemplateProps {
  signInValue: SignInInputType;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}
const SignInTemplate = ({
  signInValue,
  onChange,
  onClick,
}: SignInTemplateProps) => (
  <style.Wrapper>
    <img src={MainLogo} />
    <style.Box>
      <style.Inner>
        <Input
          value={signInValue.email}
          name="email"
          placeHolder="이메일"
          sizeType="Big"
          onChange={onChange}
        />
        <Input
          value={signInValue.password}
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

export default SignInTemplate;
