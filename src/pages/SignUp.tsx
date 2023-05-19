import { ChangeEvent, useState } from "react";
import { useSignUp } from "@/hooks/useSignUp";
import { SignUpInputType, SignUpType, SignUpValidateType } from "@/types/sign";
import SignUpTemplate from "@/components/template/signup";
import { validateAll, validateSignUp } from "@/utils/valid";

const SignUp = () => {
  const [signUpValue, setSignUpValue] = useState<SignUpInputType>({
    // id: "",
    email: "",
    name: "",
    password: "",
    // company: "",
    phoneNumber: "",
  });
  const [signUpValidate, setSignUpValidate] = useState<SignUpValidateType>({
    email: false,
    name: false,
    password: false,
    phoneNumber: false,
  });
  const [signUpValidMessage, setSignUpValideMessage] =
    useState<SignUpInputType>({
      email: "",
      name: "",
      password: "",
      phoneNumber: "",
    });
  const [isSignUpActivate, setIsSignUpActivate] = useState(false);

  const { handleSignUp } = useSignUp(signUpValue);

  const handleSignupState = (e: ChangeEvent<HTMLInputElement>) => {
    const { valid, message } = validateSignUp(
      e.target.name as SignUpType,
      e.target.value
    );
    const newValid = {
      ...signUpValidate,
      [e.target.name]: valid,
    };

    setSignUpValue({
      ...signUpValue,
      [e.target.name]: e.target.value,
    });
    setSignUpValideMessage({
      ...signUpValidMessage,
      [e.target.name]: message,
    });
    setSignUpValidate(newValid);
    setIsSignUpActivate(validateAll(newValid));
  };

  return (
    <SignUpTemplate
      signUpValue={signUpValue}
      signUpValidate={signUpValidate}
      signUpValidMessage={signUpValidMessage}
      isSignUpActivate={isSignUpActivate}
      onChange={handleSignupState}
      onClick={handleSignUp}
    />
  );
};

export default SignUp;
