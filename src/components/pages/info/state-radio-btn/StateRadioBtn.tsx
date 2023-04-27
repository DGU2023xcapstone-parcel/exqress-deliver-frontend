import { ChangeEvent } from "react";
import * as style from "./StateRadioBtn.style";

interface StateRadioBtnProps {
  text: string;
  inputValue: string;
  selected: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const StateRadioBtn = ({
  text,
  inputValue,
  selected,
  onChange,
}: StateRadioBtnProps) => {
  return (
    <style.Wrapper>
      {/* todo: input styling */}
      <style.Input
        type="radio"
        value={inputValue}
        onChange={onChange}
        checked={selected === inputValue}
      />
      <style.Text>{text}</style.Text>
    </style.Wrapper>
  );
};

export default StateRadioBtn;
