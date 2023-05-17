import { useEffect, useRef, useState } from "react";

export const useHandleScroll = (props: string) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const contentEl = contentRef.current;
    if (contentEl!.scrollHeight > contentEl!.offsetHeight) {
      setScrollable(true);
    } else {
      setScrollable(false);
    }
  }, [props]);

  return { scrollable, contentRef };
};
