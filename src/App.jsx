import { useState, useEffect } from "react";
import "./App.css";

const img =
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnA3b2lycnZ6NjRpbHQ5Y2htN3czdWZ4NmJuMW9pcW9nMG5ybmNycSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/5Yfcn9JO3ZMN6YtXPJ/giphy.gif";
const acceptImg =
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXhmcG95aWhkeWpzdXMzOWUzMnN5YzVkMGRlczJocmxya3l2OGx3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/sRLfDd1R33y1OHGMUB/giphy.gif";

const noAnswers = [
  "No",
  "Are you sure",
  "Really sure??",
  "Are you positive?",
  "Please say yes",
  "Just think about it",
  "If you say no, I will be really sad...",
  "I'll be very very sad",
  "I'll be sad for the rest of my life",
];

function App() {
  const [index, setIndex] = useState(0);
  const [accept, setAccept] = useState(false);
  const [fontSize, setFontSize] = useState(16); // Default font size

  const handleYes = () => {
    setAccept(true);
  };

  const handleNo = () => {
    setIndex((prevIndex) => (prevIndex + 1) % noAnswers.length);
    setFontSize((prevSize) => prevSize * 1.5);
  };

  useEffect(() => {
    const yesButton = document.querySelector(".yes-button");
    if (yesButton) {
      yesButton.style.fontSize = `${fontSize}px`;
    }
  }, [fontSize]);

  if (accept) {
    return (
      <div className="container">
        <h1>Knew you would say yes!</h1>
        <img src={acceptImg} alt="capoo-ily" />
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Will you be my valentine?</h1>
      <div className="button-container">
        <button className="yes-button" onClick={handleYes}>
          Yes
        </button>
        <button className="no-button" onClick={handleNo}>
          {noAnswers[index]}
        </button>
      </div>
      <img src={img} alt="capoo" />
    </div>
  );
}

export default App;
