import React, { useState } from "react";
import Card from "../components/Layouts/Card";
import { MdEdit, MdRefresh } from "react-icons/md";
import Modal from "./Layouts/Modal";
import { IoClose } from "react-icons/io5";
import EditJustS from "./AddWidgets/EditJustS";
// import openweather from "../../pages/api/openweather";

export default function Weather({ list, onDelete, onEdit }) {
  const [modalActiveEditWeather, setModalActiveEditWeather] = useState(false);
  console.log("list : ", list);
  let dataName;
  let dataIconDesc;
  let dataTemp;
  let reBtnCard;

  if (list.type === "weatherNF") {
    console.log("yoo ", list.value);
    dataName = (
      <h3 className="text-xl font-bold capitalize text-red-600">
        {list.value}
      </h3>
    );

    dataIconDesc = (
      <h4 className="text-red-400 -mt-1">
        <span className="align-middle">City not found</span>
      </h4>
    );

    dataTemp = (
      <h2 className="text-red-500 mt-1 text-5xl font-extralight">--</h2>
    );
  } else {
    reBtnCard = <MdRefresh />;
    dataName = (
      <h3 className="text-xl font-bold capitalize">{list.value.name}</h3>
    );
    dataIconDesc = (
      <h4 className="text-gray-400 -mt-1 flex justify-center items-center">
        <img
          className="h-10 w-10 "
          src={`http://openweathermap.org/img/wn/${list.value.weather[0].icon}@2x.png`}
          alt="logo"
        />
        <span className="pr-2">{list.value.weather[0].description}</span>
      </h4>
    );
    dataTemp = (
      <h2 className="text-gray-500 mt-1 text-5xl font-extralight">
        {`${list.value.main.temp}°`}
      </h2>
    );
  }

  const handleCancel = function () {
    setModalActiveEditWeather(false);
  };
  const handleDelete = function () {
    onDelete(list);
  };

  const handleEdit = function () {
    setModalActiveEditWeather(true);
  };

  const onEditSubmit = (id, value) => {
    onEdit(id, value);
    setModalActiveEditWeather(false);
  };

  return (
    <>
      {modalActiveEditWeather && (
        <Modal onCancel={handleCancel}>
          <EditJustS
            title="Edit Weather"
            onEditSubmit={onEditSubmit}
            list={list}
          />
        </Modal>
      )}
      <Card
        title="Weather"
        closeBtn={<IoClose />}
        editBtn={<MdEdit />}
        refreshBtn={reBtnCard}
        key={list.id}
        onDelete={handleDelete}
        onEdit={handleEdit}
        list={list}
      >
        <div className="text-center">
          {dataName}
          {dataIconDesc}
          {dataTemp}
          <div className="text-xs text-gray-400">
            <div className="mt-6 -mb-2 text-center">{list.date}</div>
          </div>
        </div>
      </Card>
    </>
  );
}
