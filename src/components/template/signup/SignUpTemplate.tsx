import { ChangeEvent } from "react";
import Input from "@/components/common/input";
import { SignUpInputType, SignUpValidateType } from "@/types/sign";
import SignupSubmitBtn from "@/components/pages/sign/signup-submit-btn";
import * as style from "./SignUpTemplate.style";

export interface SignUpTemplateProps {
  signUpValue: SignUpInputType;
  signUpValidate: SignUpValidateType;
  signUpValidMessage: SignUpInputType;
  isSignUpActivate: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}
const SignUpTemplate = ({
  signUpValue,
  signUpValidate,
  signUpValidMessage,
  isSignUpActivate,
  onChange,
  onClick,
}: SignUpTemplateProps) => (
  <style.Wrapper>
    <style.Box>
      <style.TextBox>
        <style.Text>이메일</style.Text>
        <Input
          value={signUpValue.email}
          name="email"
          placeHolder="예) abcd@gmail.com"
          sizeType="Big"
          onChange={onChange}
        />
        {signUpValidMessage.email && (
          <style.SubText isValid={signUpValidate.email}>
            {signUpValidMessage.email}
          </style.SubText>
        )}
      </style.TextBox>
      <style.TextBox>
        <style.Text>이름</style.Text>
        <Input
          value={signUpValue.name}
          name="name"
          placeHolder=""
          sizeType="Big"
          onChange={onChange}
        />
        {signUpValidMessage.name && (
          <style.SubText isValid={signUpValidate.name}>
            {signUpValidMessage.name}
          </style.SubText>
        )}
      </style.TextBox>
      <style.TextBox>
        <style.Text>비밀번호</style.Text>
        <Input
          value={signUpValue.password}
          name="password"
          placeHolder="영문, 숫자 조합 8~16자"
          sizeType="Big"
          onChange={onChange}
        />
        {signUpValidMessage.password && (
          <style.SubText isValid={signUpValidate.password}>
            {signUpValidMessage.password}
          </style.SubText>
        )}
      </style.TextBox>
      <style.TextBox>
        <style.Text>휴대폰 번호</style.Text>
        <Input
          value={signUpValue.phoneNumber}
          name="phoneNumber"
          placeHolder="전화번호 입력"
          sizeType="Big"
          onChange={onChange}
        />
        {signUpValidMessage.phoneNumber && (
          <style.SubText isValid={signUpValidate.phoneNumber}>
            {signUpValidMessage.phoneNumber}
          </style.SubText>
        )}
      </style.TextBox>
    </style.Box>
    <SignupSubmitBtn onClick={onClick} isSignUpActivate={isSignUpActivate} />
  </style.Wrapper>
);

export default SignUpTemplate;
