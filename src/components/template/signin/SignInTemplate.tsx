import { ChangeEvent } from "react";

import MainLogo from "@/assets/mainLogo.svg";
import Input from "@/components/common/input";
import SubmitBtn from "@/components/pages/sign/submit-btn";
import SignupBtn from "@/components/pages/sign/signup-btn";
import { SignInInputType } from "@/types/sign";
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
          isPassword={false}
          name="email"
          placeHolder="이메일"
          sizeType="Big"
          onChange={onChange}
        />
        <Input
          value={signInValue.password}
          isPassword
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
