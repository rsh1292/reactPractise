import { useEffect } from "react";
import { throttledFn } from "../utils/throttling";
type useInfiniteScrollProps = {
  scrollFn: () => Promise<void>;
};
export default function useInfiniteScroll({
  scrollFn,
}: useInfiniteScrollProps) {
  const handleScroll = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight) {
      scrollFn();
    }
  };
  useEffect(() => {
    const throttledScroll = throttledFn({ fn: handleScroll, delay: 20 });
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);
  return undefined;
}
