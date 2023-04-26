import { ChangeEvent, useState } from "react";
import SignUpTemplate from "@/components/template/signup";

export interface SignUpStateType {
  id: string;
  password: string;
  name: string;
  company: string;
  phone: string;
  email: string;
}
const SignUp = () => {
  const [signupState, setSignupState] = useState<SignUpStateType>({
    id: "",
    password: "",
    name: "",
    company: "",
    phone: "",
    email: "",
  });

  const handleSignupState = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupState({
      ...signupState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSumitSignup = () => {
    console.log("submit");
  };
  return (
    <SignUpTemplate
      signupState={signupState}
      onChange={handleSignupState}
      onClick={handleSumitSignup}
    />
  );
};

export default SignUp;
