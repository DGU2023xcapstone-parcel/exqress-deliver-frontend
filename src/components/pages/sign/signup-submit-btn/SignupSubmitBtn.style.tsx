import * as style from "./SignupSubmitBtn";

interface SignupSubmitBtnProps {
  onClick: () => void;
}
const SignupSubmitBtn = ({ onClick }: SignupSubmitBtnProps) => {
  return (
    <style.Wrapper onClick={onClick}>
      <style.Text>가입완료</style.Text>
    </style.Wrapper>
  );
};

export default SignupSubmitBtn;
