import { Routes, Route } from "react-router-dom";
import "./App.css";
import Accordion from "./Accordian/Accordian";
import Layout from "./components/Layout";
import ShimmerUI from "./Shimmer UI/Cards";
import MultiLangSupport from "./MultiLangSupport/MultiLangSupport";
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
    </Routes>
  );
}

export default App;
