import * as style from "./InfoContent.style";

interface InfoContentProps {
  date: string;
  productName: string;
  invoiceNo: string;
  name: string;
  company: string;
  state: string;
  onClick: () => void;
}

const InfoContent = ({
  date,
  productName,
  invoiceNo,
  name,
  company,
  state,
  onClick,
}: InfoContentProps) => {
  const isActivate = state !== "done";

  return (
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
          {company}
        </style.Text>
      </div>
      <style.Button
        disabled={!isActivate}
        isActivate={isActivate}
        onClick={onClick}
      >
        {isActivate ? "배송 중" : "배송 완료"}
      </style.Button>
    </style.Wrapper>
  );
};

export default InfoContent;
