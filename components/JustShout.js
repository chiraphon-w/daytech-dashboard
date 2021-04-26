import React, { useState } from "react";
import Card from "../components/Layouts/Card";
import { MdEdit } from "react-icons/md";
import EditJustSay from "./AddWidgets/EditJustSay";
import Modal from "./Layouts/Modal";
import { IoClose } from "react-icons/io5";

export default function JustShout({ list, onDelete, onEdit }) {
  const [modalActiveEditJustShout, setModalActiveEditJustShout] = useState(false);

  const handleCancel = function () {
    setModalActiveEditJustShout(false);
  };
  const handleDelete = function () {
    onDelete(list);
  };

  const handleEdit = function () {
    setModalActiveEditJustShout(true);
  };

  const onEditSubmit = (id, value) => {
    onEdit(id, value);
    setModalActiveEditJustShout(false);
  }

  return (
    <>
      {modalActiveEditJustShout && (
        <Modal onCancel={handleCancel}>
          <EditJustSay title="Edit JustShout" onEditSubmit={onEditSubmit} list={list} />
        </Modal>
      )}
      <Card
        title="JustShout"
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
