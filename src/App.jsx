import { useEffect, useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setId(data.slip.id)
      setQuote(data.slip.advice)
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  return (
    <>
      <div className="gen-container">
        <div className="content">
          <small>ADVICE #{id}</small>
          <p className="quote">
            &quot;{quote}&quot;
          </p>
        </div>
        <div className="divider"></div>

        <div className="circleBtn" onClick={fetchData}>
          <img className="dice" src="/dice.svg" alt="" />
        </div>
      </div>
    </>
  );
}
export default App;
