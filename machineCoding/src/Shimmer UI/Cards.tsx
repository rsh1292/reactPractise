import Card from "./Card";
import "./Shimmer.css";
import useMemeHook from "../useMemeHook";
import { shimmer } from "./ShimmerUI";
function ShimmerUI() {
  const memes = useMemeHook();
  return (
    <>
      <h2 className="heading">Shimmer and Infiniete Scroll</h2>
      <div className="cards">
        {memes.length === 0
          ? shimmer()
          : memes?.map((memeDetails, index) => (
              <Card url={memeDetails} id={index.toString()} />
            ))}
      </div>
    </>
  );
}

export default ShimmerUI;
