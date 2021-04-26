import React, { useState } from "react";
import Card from "../components/Layouts/Card";
import { MdEdit } from "react-icons/md";
import Modal from "./Layouts/Modal";
import { IoClose } from "react-icons/io5";
import EditJustS from "./AddWidgets/EditJustS";

export default function JustShout({ list, onDelete, onEditJustShout }) {
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
    onEditJustShout(id, value);
    setModalActiveEditJustShout(false);
  }

  return (
    <>
      {modalActiveEditJustShout && (
        <Modal onCancel={handleCancel}>
          <EditJustS title="Edit JustShout"  onEditSubmit={onEditSubmit} list={list} />
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
        <div className="mt-6 "></div>
      </Card>
    </>
  );
}
