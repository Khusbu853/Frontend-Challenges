import React from "react";
import ReactDOM from "react-dom/client";
import Accordion from "./components/Accordion";
import Stopwatch from "./components/Stopwatch";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      {/* <Accordion/> */}
      {/* <Stopwatch/> */}
      <Counter/>
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
