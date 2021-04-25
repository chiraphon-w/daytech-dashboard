import React from "react";
import { HeadSettings, TableSettings } from "./Layouts/Settings";

export default function ModalSetting({ listAllWidgets, children }) {
  let totalWidgets = listAllWidgets.length;
  let jsLength = 0;
  let sumCount = 0;
  let sumTime = 0;

  listAllWidgets.map((list) => {
    if (list.type === "justSay") {
      jsLength = jsLength + list.value.length;
    } else if (list.type === "counter") {
      sumCount = sumCount + list.value;
    } else if (list.type === "timer") {
      sumTime = sumTime + list.value;
    }
  });
  let totalTime = (
    <>
      <span>{`0${Math.floor((sumTime / 60000) % 60)}`.slice(-2)}:</span>
      <span>{`0${Math.floor((sumTime / 1000) % 60)}`.slice(-2)}</span>
    </>
  );
  return (
    <div>
      <h2 className="text-xl mb-4">Settings</h2>
      <HeadSettings title="Statistics">
        <div className="table">
          <TableSettings title="Total widgets">{totalWidgets}</TableSettings>
          <TableSettings title="Total JustSay length">{jsLength}</TableSettings>
          <TableSettings title="Total count">{sumCount}</TableSettings>
          <TableSettings title="Total time">{totalTime}</TableSettings>
        </div>
      </HeadSettings>
      {children}
    </div>
  );
}
