import React, { useState } from "react";
import Button from "../Buttons/Button";

export default function AddCounter({
  setCounter,
  handleCancel,
  setListAllWidgets,
  listAllWidgets,
  realTime,
}) {
  const [checkError, setCheckError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    setCounter(e.target.title.value);
    handleCancel();

    let id;
    if (listAllWidgets.length == 0) {
      id = 1;
    } else {
      const lastArray = listAllWidgets.slice(-1).pop(); // .slice(-1).pop() เลือก array ตัวสุดท้ายมาให้
      id = lastArray.id + 1;
    }
    const data = {
      value: e.target.title.value,
      id: id,
      date: realTime,
    };
    setListAllWidgets([...listAllWidgets, data]);
  };

  return (
    <div>
      <h2 className="text-xl mb-2">Add Counter</h2>
      <form onSubmit={onSubmit} className="flex">
        <div className="flex-1 mr-1">
          <input
            type="number"
            name="title"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            placeholder="Enter the initial value"
            className="w-full px-2.5 py-1 focus:outline-none rounded-md"
            min="0"
            max="999999"
          />
        </div>
        <Button>Add</Button>
      </form>

      <div className="text-red-600 text-xs mt-1">{checkError}</div>
    </div>
  );
}
