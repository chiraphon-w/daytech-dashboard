import React, { useState } from "react";
import AddWidgetForm from "../Layouts/AddWidgetForm";

export default function EditJustS({ onEditSubmit, list, title }) {
  const [checkError, setCheckError] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.length < 3) {
      setCheckError("Please enter at least 3 characters.");
    } else {
      if (list.type === "justSay") {
        onEditSubmit(list.id, e.target.title.value.trim());
      } else if (list.type === "justShout") {
        onEditSubmit(e.target.title.value.trim());
      }
    }
  };

  return (
    <AddWidgetForm
      title={title}
      onSubmit={onSubmit}
      type="text"
      defaultValue={list.value}
      checkError={checkError}
    />
  );
}
