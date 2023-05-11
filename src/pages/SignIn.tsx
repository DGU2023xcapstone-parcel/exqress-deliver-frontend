import { ChangeEvent, useState } from "react";
import { useSignIn } from "@/hooks/useSignIn";
import { SignInInputType } from "@/types/sign";
import SignInTemplate from "@/components/template/signin";

const SignIn = () => {
  const [signInValue, setSignInValue] = useState<SignInInputType>({
    id: "",
    password: "",
  });
  const { handleSignIn } = useSignIn();

  const handleSignInValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInValue({
      ...signInValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SignInTemplate
      id={signInValue.id}
      password={signInValue.password}
      onChange={handleSignInValue}
      onClick={() => handleSignIn(signInValue)}
    />
  );
};

export default SignIn;
