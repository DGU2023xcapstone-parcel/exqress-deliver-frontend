import SignInTemplate from "@/components/template/signin";
import { useSignIn } from "@/hooks/useSignIn";

const SignIn = () => {
  const { signInValue, handleSignInValue, handleSignIn } = useSignIn();

  return (
    <SignInTemplate
      signInValue={signInValue}
      onChange={handleSignInValue}
      onClick={handleSignIn}
    />
  );
};

export default SignIn;
