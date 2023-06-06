import { ChangeEvent } from "react";

import Input from "@/components/common/input";
import SignupSubmitBtn from "@/components/pages/sign/signup-submit-btn";
import { SignUpInputType, SignUpValidateType } from "@/types/sign";
import * as style from "./SignUpTemplate.style";

export interface SignUpTemplateProps {
  signUpValue: SignUpInputType;
  signUpValidate: SignUpValidateType;
  isSignUpActivate: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}
const SignUpTemplate = ({
  signUpValue,
  signUpValidate,
  isSignUpActivate,
  onChange,
  onClick,
}: SignUpTemplateProps) => (
  <style.Wrapper>
    <style.Box>
      <style.TextBox>
        <style.Text>이메일</style.Text>
        <Input
          isPassword={false}
          value={signUpValue.email}
          name="email"
          placeHolder="예) abcd@gmail.com"
          sizeType="Big"
          onChange={onChange}
        />
        {signUpValidate.email.message && (
          <style.SubText isValid={signUpValidate.email.isValid}>
            {signUpValidate.email.message}
          </style.SubText>
        )}
      </style.TextBox>
      <style.TextBox>
        <style.Text>이름</style.Text>
        <Input
          isPassword={false}
          value={signUpValue.name}
          name="name"
          placeHolder=""
          sizeType="Big"
          onChange={onChange}
        />
        {signUpValidate.name.message && (
          <style.SubText isValid={signUpValidate.name.isValid}>
            {signUpValidate.name.message}
          </style.SubText>
        )}
      </style.TextBox>
      <style.TextBox>
        <style.Text>비밀번호</style.Text>
        <Input
          isPassword
          value={signUpValue.password}
          name="password"
          placeHolder="영문, 숫자 조합 8~16자"
          sizeType="Big"
          onChange={onChange}
        />
        {signUpValidate.password.message && (
          <style.SubText isValid={signUpValidate.password.isValid}>
            {signUpValidate.password.message}
          </style.SubText>
        )}
      </style.TextBox>
      <style.TextBox>
        <style.Text>휴대폰 번호</style.Text>
        <Input
          isPassword={false}
          value={signUpValue.phoneNumber}
          name="phoneNumber"
          placeHolder="전화번호 입력"
          sizeType="Big"
          onChange={onChange}
        />
        {signUpValidate.phoneNumber.message && (
          <style.SubText isValid={signUpValidate.phoneNumber.isValid}>
            {signUpValidate.phoneNumber.message}
          </style.SubText>
        )}
      </style.TextBox>
    </style.Box>
    <SignupSubmitBtn onClick={onClick} isSignUpActivate={isSignUpActivate} />
  </style.Wrapper>
);

export default SignUpTemplate;
