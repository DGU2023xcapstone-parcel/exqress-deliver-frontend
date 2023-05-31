import SignUpTemplate from "@/components/template/signup";
import { useSignUp } from "@/hooks/useSignUp";

const SignUp = () => {
  const {
    signUpValue,
    signUpValidate,
    isSignUpActivate,
    handleSignupState,
    handleSignUp,
  } = useSignUp();

  return (
    <SignUpTemplate
      signUpValue={signUpValue}
      signUpValidate={signUpValidate}
      isSignUpActivate={isSignUpActivate}
      onChange={handleSignupState}
      onClick={handleSignUp}
    />
  );
};

export default SignUp;
