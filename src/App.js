import React from "react";
import ReactDOM from "react-dom/client";
import Accordion from "./components/Accordion";
import Stopwatch from "./components/Stopwatch";
import Counter from "./components/Counter";
import ImageCarousel from "./components/ImageCarousel";
import StarRating from "./components/StarRating";
import Test from "./components/test";

const App = () => {
  return (
    <div>
      {/* <Accordion/> */}
      <Test/>
      {/* <Stopwatch/> */}
      {/* <Counter/> */}
      {/* <StarRating/> */}
      {/* <ImageCarousel/> */}
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
