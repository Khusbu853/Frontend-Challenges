import React from "react";
import ReactDOM from "react-dom/client";
import Accordion from "./components/Accordion";
import Stopwatch from "./components/Stopwatch";

const App = () => {
  return (
    <div>
      {/* <Accordion/> */}
      <Stopwatch/>
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
