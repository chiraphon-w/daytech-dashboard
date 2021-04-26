import React, { useState } from "react";
import AddWidgetForm from "../Layouts/AddWidgetForm";

export default function JsCheck({ defaultValueShout, onEditJustShout, listAllWidgets, title }) {
    console.log(listAllWidgets, "list");
  const [checkError, setCheckError] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.length < 3) {
      setCheckError("Please enter at least 3 characters.");
    } else {
      // console.log(list, "in EditJustS");
      onEditJustShout(listAllWidgets.id, e.target.title.value.trim());
    }
  };

  return (
    <AddWidgetForm
      title={title}
      onSubmit={onSubmit}
      type="text"
      defaultValue={defaultValueShout}
      checkError={checkError}
    />
  );
}
{/* <form className="flex">
  <div className="flex-1 mr-1">
    <input
      // value={e.target.value.trim()}
      type="text"
      className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
      placeholder="Enter text"
      defaultValue={defaultValueShout}
    />
  </div>
  <div>
    <button
      onClick={onEditJustShout}
      className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
    >
      {" "}
      Edit
    </button>
  </div>
</form>; */}
