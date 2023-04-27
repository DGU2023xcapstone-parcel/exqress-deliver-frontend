import { SignUpTemplateProps } from "@/components/template/signup/SignUpTemplate";
import * as style from "./SignupSubmitBtn.style";

const SignupSubmitBtn = ({ onClick }: Pick<SignUpTemplateProps, "onClick">) => (
  <style.Wrapper onClick={onClick}>
    <style.Text>가입완료</style.Text>
  </style.Wrapper>
);

export default SignupSubmitBtn;
