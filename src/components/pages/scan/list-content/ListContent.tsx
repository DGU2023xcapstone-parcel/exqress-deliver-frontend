import * as style from "./ListContent.style";

interface ListContentProps {
  title: string;
  content: string;
}
const ListContent = ({ title, content }: ListContentProps) => (
  <style.Wrapper>
    <style.LeftBox>
      <style.Text>{title}</style.Text>
    </style.LeftBox>
    <style.RightBox>
      <style.Text>{content}</style.Text>
    </style.RightBox>
  </style.Wrapper>
);

export default ListContent;
