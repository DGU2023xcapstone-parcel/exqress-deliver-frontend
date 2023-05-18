import { SignUpType, SignUpValidateType } from "@/types/sign";

export const validateSignUp = (type: SignUpType, input: string) => {
  const regex = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    name: /^[A-Za-z가-힣]+$/,
    phoneNumber: /^\d{3}-\d{3,4}-\d{4}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
  };

  const valid: boolean = regex[type].test(input);
  let message = "";

  switch (type) {
    case "email":
      valid
        ? (message = "사용가능한 이메일 입니다.")
        : (message = "이메일 형식에 맞게 입력해 주세요.");
      break;
    case "name":
      valid
        ? (message = "사용가능한 이름입니다.")
        : (message = "1글자 이상 입력해 주세요.");
      break;
    case "password":
      valid
        ? (message = "사용가능한 비밀번호 입니다.")
        : (message = "영문, 숫자 조합 8~16자로 입력해 주세요.");
      break;
    case "phoneNumber":
      valid
        ? (message = "사용가능한 휴대폰 번호 입니다.")
        : (message = "휴대폰 번호 형식에 맞게 입력해 주세요.");
      break;
    default:
      message = "";
      break;
  }
  return { valid, message };
};

export const validateAll = (input: SignUpValidateType) => {
  for (let key in input)
    if (input[key as keyof SignUpValidateType] === false) return false;
  return true;
};
