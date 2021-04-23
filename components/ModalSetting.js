import React, { useState } from "react";
import Button from "./Buttons/Button";

export default function ModalSetting({ listAllWidgets, children }) {
  let totalWidgets = listAllWidgets.length;
  let justSayLength = 0;
  let sumCount = 0;

  listAllWidgets.map((list) => {
    if (list.type === "justSay") {
      justSayLength = justSayLength + list.value.length;
    } else if (list.type === "counter") {
      sumCount = sumCount + list.value;
    }

    // console.log(list, "list in setting");
  });

  return (
    <div>
      <h2 className="text-xl mb-4">Settings</h2>
      <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
        <h2 className="text-lg font-bold text-gray-400 mb-1.5">Statistics</h2>
        <div className="table">
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">Total widgets: </div>
            <div className="table-cell">{totalWidgets}</div>
          </div>
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">
              Total JustSay length:{" "}
            </div>
            <div className="table-cell">{justSayLength}</div>
          </div>
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">Total count: </div>
            <div className="table-cell">{sumCount}</div>
          </div>
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">Total time: </div>
            <div className="table-cell">00:00</div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
