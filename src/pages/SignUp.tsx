import { ChangeEvent, useState } from "react";
import { useSignUp } from "@/hooks/useSignUp";
import { SignUpInputType } from "@/types/sign";
import SignUpTemplate from "@/components/template/signup";

const SignUp = () => {
  const [signupValue, setSignupValue] = useState<SignUpInputType>({
    id: "",
    password: "",
    name: "",
    company: "",
    phone: "",
    email: "",
  });
  const { handleSignUp } = useSignUp();

  const handleSignupState = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupValue({
      ...signupValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SignUpTemplate
      signupState={signupValue}
      onChange={handleSignupState}
      onClick={() => handleSignUp(signupValue)}
    />
  );
};

export default SignUp;
