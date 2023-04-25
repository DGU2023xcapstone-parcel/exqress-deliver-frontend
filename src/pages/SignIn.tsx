import { ChangeEvent, useState } from "react";
import SignInTemplate from "../components/template/signin";

const SignIn = () => {
  const [signInValue, setSignInValue] = useState({
    id: "",
    password: "",
  });

  const handleSignInValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInValue({
      ...signInValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    console.log("로그인");
  };

  return (
    <SignInTemplate
      id={signInValue.id}
      password={signInValue.password}
      onChange={handleSignInValue}
      onClick={handleSubmit}
    />
  );
};

export default SignIn;
