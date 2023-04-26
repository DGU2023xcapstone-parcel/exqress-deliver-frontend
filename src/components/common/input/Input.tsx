import { ChangeEvent } from "react";
import { SizeType } from "@/types/types";
import * as style from "./Input.style";

interface InputProps {
  value: string;
  name: string;
  placeHolder: string;
  sizeType: SizeType;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({
  value,
  name,
  placeHolder,
  sizeType,
  onChange,
}: InputProps) => (
  <style.Wrapper sizeType={sizeType}>
    <style.Box
      name={name}
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
    />
  </style.Wrapper>
);

export default Input;
