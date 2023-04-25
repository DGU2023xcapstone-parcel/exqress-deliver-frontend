import * as style from "./SubmitBtn.style";

interface SubmitBtnProps {
  text: string;
  onClick: () => void;
}
const SubmitBtn = ({ text, onClick }: SubmitBtnProps) => {
  return <style.Button onClick={onClick}>{text}</style.Button>;
};

export default SubmitBtn;
