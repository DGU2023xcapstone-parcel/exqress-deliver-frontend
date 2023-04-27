import { ChangeEvent, useState } from "react";
import InfoTemplate from "@/components/template/info";

const INFO_LIST: InfoType[] = [
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412321",
    name: "이규호",
    company: "CJ대한통운 (민락동)",
  },
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412321",
    name: "이규호",
    company: "CJ대한통운 (민락동)",
  },
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412321",
    name: "이규호",
    company: "CJ대한통운 (민락동)",
  },
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412321",
    name: "이규호",
    company: "CJ대한통운 (민락동)",
  },
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412321",
    name: "이규호",
    company: "CJ대한통운 (민락동)",
  },
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412321",
    name: "이규호",
    company: "CJ대한통운 (민락동)",
  },
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412321",
    name: "이규호",
    company: "CJ대한통운 (민락동)",
  },
];

export interface InfoType {
  date: string;
  productName: string;
  invoiceNo: string;
  name: string;
  company: string;
}
const Info = () => {
  const [radioValue, setRadioValue] = useState("all");
  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };
  return (
    <InfoTemplate
      radioValue={radioValue}
      onChange={handleRadio}
      infoList={INFO_LIST}
      onClick={() => {
        console.log("send");
      }}
    />
  );
};

export default Info;
