import * as style from "./SignupBtn.style";

const SignupBtn = () => {
  return (
    <style.Wrapper>
      <style.Text>아직 계정이 없으세요?&nbsp;</style.Text>
      <style.Button to="/">가입하기</style.Button>
    </style.Wrapper>
  );
};

export default SignupBtn;
