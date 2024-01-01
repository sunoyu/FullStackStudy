import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  // [0,f]
  const [count, setCount] = useState(0); // hook

  function incrementCounterFunction() {
    setCount(count + 1);

    console.log(count);
  }

  return (
    <div className="Counter">
      <span className="count"> {count}</span>
      <div>
        <button className="counterButton" onClick={incrementCounterFunction}>
          +1
        </button>
      </div>
    </div>
  );
}
