import { Routes, Route } from "react-router-dom";
import "./App.css";
import Accordion from "./Accordian/Accordian";
import Layout from "./components/Layout";
import ShimmerUI from "./Shimmer UI/Cards";
import MultiLangSupport from "./MultiLangSupport/MultiLangSupport";
import Pagination from "./Pagination/Pagination";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/accordian" element={<Accordion />}></Route>
      <Route path="/shimmerUI&infinteScroll" element={<ShimmerUI />}></Route>
      <Route
        path="/multiLanguageSupport"
        element={<MultiLangSupport />}
      ></Route>
      <Route path="/pagination" element={<Pagination />} />
    </Routes>
  );
}

export default App;
