import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = (props) => {
  if (props.good !== 0 || props.neutral !== 0 || props.bad !== 0) {
    return (
      <tbody>
        <tr>
          <td>
            <h1>Statistics</h1>
          </td>
        </tr>
        <Statistic text="Good" value={props.good} />

        <Statistic text="Neutral" value={props.neutral} />
        <Statistic text="Bad" value={props.bad} />
        <Statistic text="All" value={props.total} />
        <Statistic
          text="Avarage"
          value={
            (props.good * 1 + props.neutral * 0 + props.bad * -1) / props.total
          }
        />
        <Statistic text="Positive %" value={(props.good * 100) / props.total} />
      </tbody>
    );
  }
  return (
    <tbody>
      <tr>
        <td>
          <h1>Statistics</h1>
        </td>
      </tr>
      <tr>
        <td>
          <p>No feedback given</p>
        </td>
      </tr>
    </tbody>
  );
};

const Statistic = (props) => {
  return (
    <tr>
      <td> {props.text} </td>
      <td> {props.value} </td>
    </tr>
  );
};

const Button = (props) => {
  return (
    <tr>
      <td>
        <button onClick={props.onClick}>{props.text}</button>
      </td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };
  const handleGood = () => {
    setGood(good + 1);
  };
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h1>Give feedback</h1>
          </td>
        </tr>
        <Button text="Good" onClick={() => handleGood()} />
        <Button text="Neutral" onClick={() => handleNeutral()} />
        <Button text="Bad" onClick={() => handleBad()} />
      </tbody>

      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </table>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
