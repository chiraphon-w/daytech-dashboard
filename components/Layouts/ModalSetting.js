import React, { useState } from "react";
import Button from "../Buttons/Button";

export default function ModalSetting({
  setJustSay,
  handleCancel,
  setListAllWidgets,
  listAllWidgets,
  realTime,
  handleAddWidgets,
}) {
  const [checkError, setCheckError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (e.target.title.value.length < 3) {
      setCheckError("Please enter at least 3 characters.");
    } else {
      setJustSay(e.target.title.value.trim());
      handleCancel();

      let id;
      if (listAllWidgets.length == 0) {
        id = 1;
      } else {
        const lastArray = listAllWidgets.slice(-1).pop(); // .slice(-1).pop() เลือก array ตัวสุดท้ายมาให้
        id = lastArray.id + 1;
      }
      const data = {
        value: e.target.title.value.trim(),
        id: id,
        date: realTime,
        type: "justSay",
      };
      setListAllWidgets([...listAllWidgets, data]);
    }
  };
  return (
    <div>
      <h2 className="text-xl mb-4">Settings</h2>
      <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
        <h2 className="text-lg font-bold text-gray-400 mb-1.5">Statistics</h2>
        <div className="table">
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">
              Total JustSay length:{" "}
            </div>
            <div className="table-cell">0</div>
          </div>
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">Total count: </div>
            <div className="table-cell">0</div>
          </div>
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">Total time: </div>
            <div className="table-cell">00:00</div>
          </div>
        </div>
      </div>
      <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
        <h2 className="text-lg font-bold text-gray-400 mb-1.5">Reset Zone</h2>
        <div className="flex items-center">
          <select className="flex-1 mt-1 mr-1.5 py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 text-sm">
            <option value="Counter">All counters</option>
            <option value="Timer">All timers</option>
          </select>
          <button className="text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600">
            {" "}
            Set zero
          </button>
        </div>
      </div>
      <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
        <h2 className="text-lg font-bold text-gray-400 mb-1.5">Delete Zone</h2>
        <button className="text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600 w-full mb-1">
          {" "}
          Delete all widgets
        </button>
      </div>
    </div>
  );
}
