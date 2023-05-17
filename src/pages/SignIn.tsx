import { ChangeEvent, useState } from "react";
import { useSignIn } from "@/hooks/useSignIn";
import { SignInInputType } from "@/types/sign";
import SignInTemplate from "@/components/template/signin";

const SignIn = () => {
  const [signInValue, setSignInValue] = useState<SignInInputType>({
    email: "",
    password: "",
  });

  const { handleSignIn } = useSignIn(signInValue);

  const handleSignInValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInValue({
      ...signInValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SignInTemplate
      signInValue={signInValue}
      onChange={handleSignInValue}
      onClick={handleSignIn}
    />
  );
};

export default SignIn;
