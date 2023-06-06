import { ChangeEvent } from "react";

import { SizeType } from "@/types/style";
import * as style from "./Input.style";

interface InputProps {
  value: string;
  name: string;
  placeHolder: string;
  sizeType: SizeType;
  isPassword: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({
  value,
  name,
  placeHolder,
  sizeType,
  isPassword,
  onChange,
}: InputProps) => (
  <style.Wrapper sizeType={sizeType}>
    <style.Box
      type={isPassword ? "password" : "test"}
      name={name}
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
    />
  </style.Wrapper>
);

export default Input;
