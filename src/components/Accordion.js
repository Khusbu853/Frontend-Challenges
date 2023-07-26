import questions from "./data";
import { useState } from "react";



const Accordion = () => {
  const [body, setBody] = useState("");

  return (
    <>
      <div className="footer-container">
        <h1 className="footer-header">Collapsible Accordion</h1>
        <div className="footer-accordian-container">
          {questions.map((data, index) => {
            return (
              <div className="footer-accordian" key={index}>
                <div
                  className="footer-listitem-header"
                  onClick={() =>
                    body === data.id
                      ? setBody("")
                      : setBody(data.id)
                  }
                >
                  <h2 className="footer-listitem-title">{data.title}</h2>
                  {body === data.id ? ">" : "<"}
                </div>

                {body === data.id && (
                  <div className="footer-listitem-container">
                    <p>{data.info}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
      </div>

    </>
  );
};

export default Accordion;