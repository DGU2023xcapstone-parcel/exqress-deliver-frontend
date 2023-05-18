import { SignUpTemplateProps } from "@/components/template/signup/SignUpTemplate";
import * as style from "./SignupSubmitBtn.style";

const SignupSubmitBtn = ({
  onClick,
  isSignUpActivate,
}: Pick<SignUpTemplateProps, "onClick" | "isSignUpActivate">) => (
  <style.Wrapper
    onClick={onClick}
    isActivate={isSignUpActivate}
    disabled={!isSignUpActivate}
  >
    <style.Text>가입완료</style.Text>
  </style.Wrapper>
);

export default SignupSubmitBtn;
