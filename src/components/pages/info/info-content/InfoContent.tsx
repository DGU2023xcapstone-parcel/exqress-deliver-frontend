import * as style from "./InfoContent.style";

interface InfoContentProps {
  date: string;
  productName: string;
  invoiceNo: string;
  name: string;
  company: string;
  onClick: () => void;
}

const InfoContent = ({
  date,
  productName,
  invoiceNo,
  name,
  company,
  onClick,
}: InfoContentProps) => {
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
      <style.Button>배송완료</style.Button>
    </style.Wrapper>
  );
};

export default InfoContent;
