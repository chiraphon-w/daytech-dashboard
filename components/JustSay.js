import React, { useState } from "react";
import Card from "../components/Layouts/Card";
import { MdEdit } from "react-icons/md";
import Modal from "./Layouts/Modal";
import { IoClose } from "react-icons/io5";
import EditJustS from "./AddWidgets/EditJustS";

export default function JustSay({ list, onDelete, onEdit }) {
  const [modalActiveEditJustSay, setModalActiveEditJustSay] = useState(false);

  const handleCancel = function () {
    setModalActiveEditJustSay(false);
  };
  const handleDelete = function () {
    onDelete(list);
  };

  const handleEdit = function () {
    setModalActiveEditJustSay(true);
  };

  const onEditSubmit = (id, value) => {
    onEdit(id, value);
    setModalActiveEditJustSay(false);
  }

  return (
    <>
      {modalActiveEditJustSay && (
        <Modal onCancel={handleCancel}>
          <EditJustS title="Edit JustSay" onEditSubmit={onEditSubmit} list={list} />
        </Modal>
      )}
      <Card
        title="JustSay"
        closeBtn={<IoClose />}
        editBtn={<MdEdit />}
        key={list.id}
        onDelete={handleDelete}
        onEdit={handleEdit}
        list={list}
      >
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold">{list.value}</h1>
        </div>
        <div className="text-xs text-gray-400">
          <div className="mt-6 -mb-2 text-center">{list.date}</div>
        </div>
      </Card>
    </>
  );
}
