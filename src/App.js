import React from "react";
import ReactDOM from "react-dom/client";
import Accordion from "./components/Accordion";

const App = () => {
  return (
    <div>
      <Accordion/>
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
