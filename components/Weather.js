import React, { useState } from "react";
import Card from "../components/Layouts/Card";
import { MdEdit, MdRefresh } from "react-icons/md";
import Modal from "./Layouts/Modal";
import { IoClose } from "react-icons/io5";
import EditForm from "./AddWidgets/EditForm";
import openweather from "../pages/api/openweather";

export default function Weather({ list, onDelete, onEditWeather }) {
  const [modalActiveEditWeather, setModalActiveEditWeather] = useState(false);
  let dataName;
  let dataIconDesc;
  let dataTemp;
  let reBtnCard;
  let h3Sty = "text-xl font-bold capitalize";

  if (list.type === "weatherNF") {
    dataName = (
      <h3 className={`${h3Sty} text-red-600`}>
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
      <h3 className={h3Sty}>{list.value.name}</h3>
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
  // id, type, value
  const onEditSubmit = async (id, type, name) => {
    try {
      const res = await openweather.get("/data/2.5/weather", {
        params: {
          q: name,
          units: "metric",
        },
      });

      // destructuring array
      const { data } = res;
      onEditWeather(id, "weather", data);
    } catch {
      onEditWeather(id, "weatherNF", name);
    }

    setModalActiveEditWeather(false);
  };

  const handleRefresh = async () => {
    try {
      const res = await openweather.get("/data/2.5/weather", {
        params: {
          q: list.value.name,
          units: "metric",
        },
      });
      
      // destructuring array
      const { data } = res;
      onEditWeather(list.id, "weather", data);
    } catch {
      onEditWeather(list.id, "weatherNF", list.value.name);
    }
  }

  return (
    <>
      {modalActiveEditWeather && (
        <Modal onCancel={handleCancel}>
          <EditForm
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
        onRefresh={handleRefresh}
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
