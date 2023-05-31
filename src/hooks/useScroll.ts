import { useEffect, useRef, useState } from "react";

/**
 * 모바일에서 화면을 잡고 끌때 끌리는 현상을 막았는데 스크롤이 생겼을때는 스크롤 가능하게 하기 위한 hook
 * @param props radio value 값
 * @returns scrollable 스크롤 되게 할건지, contentRef 컨텐츠에 접근하기 위한 ref
 */
export const useScroll = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setScrollable] = useState(false);

  // 만약 스크롤 생겼으면 스크롤 가능하게
  useEffect(() => {
    const contentEl = contentRef.current;
    if (contentEl!.scrollHeight > contentEl!.offsetHeight) {
      setScrollable(true);
    } else {
      setScrollable(false);
    }
  }, []);

  return { isScrollable, contentRef };
};
