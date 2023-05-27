import { InfoType } from "@/types/info";
import * as style from "./InfoContent.style";

interface InfoContentProps {
  date: string;
  productName: string;
  invoiceNo: string;
  name: string;
  phoneNumber: string;
  isComplete: boolean;
  address: string;
  onClick: (props: Pick<InfoType, "invoiceNo">) => void;
}

const InfoContent = ({
  date,
  productName,
  invoiceNo,
  name,
  phoneNumber,
  isComplete,
  address,
  onClick,
}: InfoContentProps) => (
  <style.Wrapper>
    <div>
      <style.Text isBig={false} isDark>
        {date}
      </style.Text>
      <style.Text isBig isDark>
        {productName}
      </style.Text>
      <style.Text isBig={false} isDark={false}>
        {invoiceNo} {name}
      </style.Text>
      <style.Text isBig={false} isDark>
        {phoneNumber}
      </style.Text>
      <style.Text isBig={false} isDark>
        {address}
      </style.Text>
    </div>
    <style.Button
      disabled={!isComplete}
      isActivate={isComplete}
      onClick={() => onClick({ invoiceNo })}
    >
      {isComplete ? "배송 중" : "배송 완료"}
    </style.Button>
  </style.Wrapper>
);

export default InfoContent;
