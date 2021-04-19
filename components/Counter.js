import React, { useState } from "react";
import Card from "../components/Layouts/Card";
import Button from "../components/Buttons/Button";

export default function Counter({ title, listAllWidgets }) {
  return listAllWidgets.map((list, index) => {
    console.log(list);
    const [count, setCount] = useState(list.value);
    // setCount() += list.value;

    let countClass =
      "text-5xl rounded-full w-10 text-center focus:outline-none";
    let countBlue = "text-blue-500";

    let resetButton;
    let decrease;
    let disabled = true;

    const handleClick = () => {
      setCount(0);
    };

    if (count == 0) {
      resetButton = (
        <Button doClick={handleClick} disabled={disabled}>
          Reset
        </Button>
      );
      decrease = <button className={`${countClass} text-gray-300`}>-</button>;
    } else {
      resetButton = (
        <Button doClick={handleClick} disabled={!disabled}>
          Reset
        </Button>
      );
      decrease = (
        <button
          onClick={() => setCount(count - 1)}
          className={`${countClass} + ${countBlue}`}
        >
          -
        </button>
      );
    }

    return (
      <Card title="Counter" key={index}>
        <div className="text-center">
          <div className="flex items-center justify-center mt-4 mb-6">
            {decrease}
            <div className="text-6xl mx-7">{count}</div>
            <button
              onClick={() => setCount(count + list.value + 1)}
              className={`${countClass} + ${countBlue}`}
            >
              +
            </button>
          </div>
          {resetButton}
          <div className="text-xs text-gray-400">
            <div className="mt-6 -mb-2 text-center">{list.date}</div>
          </div>
        </div>
      </Card>
    );
  });
}
