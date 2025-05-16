import { useEffect, useState } from "react";
import axios from "axios";
import useInfiniteScroll from "./InfiniteScroll/InfiniteScroll";

export default function useMemeHook() {
  const [meme, setMemes] = useState<string[]>([]);

  const getMeme = async () => {
    let memesList = await axios.get("https://meme-api.com/gimme/20");
    let data = memesList.data.memes.map((memedetail: any) => memedetail.url);

    setMemes((meme) => [...meme, ...data]);
  };

  useInfiniteScroll({
    scrollFn: getMeme,
  });

  useEffect(() => {
    getMeme();
  }, []);
  return meme;
}
