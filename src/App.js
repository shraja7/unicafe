import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + bad + neutral}</p>
      {good + bad + neutral === 0 ? (
        <p>No Feedback</p>
      ) : (
        <div>
          <p>average {((good - bad) / (good + bad + neutral)).toFixed(2)}</p>
          <p>positive {((good / (good + bad + neutral)) * 100).toFixed(2)} %</p>
        </div>
      )}
    </div>
  );
};

export default App;
