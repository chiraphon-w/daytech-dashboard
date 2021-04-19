import React, { useState } from "react";
import JustSay from "./JustSay";
import Timer from "./Timer";
import Counter from "./Counter";
import WidgetTools from "./WidgetTools";

export default function Widgets() {
  return (
    <>
      <h2 className="text-xl">Widgets</h2>
      <div className="pt-3">
        <div className="mb-4">
          <WidgetTools />

          {/* <JustSay />
            <Counter /> 
            <Timer />*/}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
