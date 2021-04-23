import React, { useState } from "react";
import Button from "./Buttons/Button";
import ModalSetting from "./ModalSetting";
import {
  RiAddCircleLine,
  RiIncreaseDecreaseLine,
  RiSettings3Line,
} from "react-icons/ri";
import { BiBomb } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoTimerOutline } from "react-icons/io5";

import WidgetsCard from "./Layouts/WidgetsCard";
import Modal from "./Layouts/Modal";

import AddJustSay from "./AddWidgets/AddJustSay";
import AddCounter from "./AddWidgets/AddCounter";
import JustSay from "./JustSay";
import Counter from "./Counter";
import Timer from "./Timer";

export default function WidgetTools() {
  let ct = "mx-auto text-4xl";
  let menuSty = "w-1/3 pt-1.5 pl-1.5";
  let cardSty = "md:flex md:flex-wrap md:-mr-4";
  let iconSty = "inline-block text-xl relative -top-0.5";
  let disabled = false;

  let d = new Date();
  let ye = new Intl.DateTimeFormat("en", { year: "2-digit" }).format(d);
  let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  let hms = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(d);
  const realTime = `Added on ${mo} ${da}, ${ye}, ${hms}`;

  const [modalActiveMenu, setModalActiveMenu] = useState(false);
  const [modalActiveJustSay, setModalActiveJustSay] = useState(false);
  const [modalActiveCounter, setModalActiveCounter] = useState(false);
  const [modalActiveSetting, setModalActiveSetting] = useState(false);

  const [listAllWidgets, setListAllWidgets] = useState([]);

  const handleClick = function () {
    setModalActiveMenu(true);
  };
  const handleJustSay = function () {
    setModalActiveJustSay(true);
    setModalActiveMenu(false);
  };
  const handleCounter = function () {
    setModalActiveCounter(true);
    setModalActiveMenu(false);
  };
  const handleCancel = function () {
    setModalActiveMenu(false);
    setModalActiveJustSay(false);
    setModalActiveCounter(false);
    setModalActiveSetting(false);
  };

  const handleSetting = function () {
    setModalActiveSetting(true);
  };
  const handleClear = function () {
    setListAllWidgets([]);
  };

  const onUpdateValue = (id, value) => {
    // console.log("id: ", id);
    // console.log("value: ", value);

    let newWidgets = JSON.parse(JSON.stringify(listAllWidgets));
    newWidgets.map((widget) => {
      if (widget.id === id) widget.value = value;
    });

    setListAllWidgets(newWidgets);
  };

  const handleReset = () => {
    let newWidgets = [];
    listAllWidgets.map((list) => {
      if (list.type === "counter") {
        list.value = 0;
      }
      newWidgets.push(list);
    });
    console.log(newWidgets, "newWidgets");
    setListAllWidgets(newWidgets);
  };

  const handleAdd = function (type, value) {
    let id;
    if (listAllWidgets.length == 0) {
      id = 1;
    } else {
      const lastArray = listAllWidgets.slice(-1).pop(); // .slice(-1).pop() เลือก array ตัวสุดท้ายมาให้
      id = lastArray.id + 1;
    }
    const data = {
      id: id,
      date: realTime,
      type,
      value,
    };

    setListAllWidgets([...listAllWidgets, data]);
    handleCancel();
  };

  const addWidgetPanal = function () {
    if (listAllWidgets.length > 0) {
      return listAllWidgets.map((list) => {
        if (list.type === "justSay") {
          return (
            <JustSay
              key={list.id}
              list={list}
              onDelete={handleDelete}
              onEdit={onEdit}
            />
          );
        } else if (list.type === "counter") {
          return (
            <Counter
              key={list.id}
              list={list}
              onDelete={handleDelete}
              onUpdateValue={onUpdateValue}
            />
          );
        } else if (list.type === "timer") {
          return <Timer key={list.id} list={list} onDelete={handleDelete} />;
        }
      });
    } else {
      return (
        <>
          <div className="md:inner md:w-1/2 pb-4 md:pr-4">
            <div className="p-5 border-1 bg-white rounded-2xl relative undefined">
              <h2 className="text-lg font-bold text-gray-400 mb-1.5" />
              <div className="text-center text-gray-400 my-8 font-light">
                <p className="text-4xl mb-2">No widgets at all</p>
                <p>
                  Click{" "}
                  <button
                    onClick={handleClick}
                    className="font-normal text-blue-400 focus:outline-none"
                  >
                    HERE{" "}
                  </button>{" "}
                  to add a new one
                </p>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  const handleDelete = function (list) {
    if (listAllWidgets.length > 0) {
      setListAllWidgets(
        listAllWidgets.filter((widget) => widget.id !== list.id)
      );
    }
  };

  const onEdit = (newId, newValue) => {
    let newListAllWidgets = [];
    listAllWidgets.map((data) => {
      if (data.id === newId) {
        data.value = newValue;
      }

      newListAllWidgets.push(data);
    });

    setListAllWidgets(newListAllWidgets);
  };

  return (
    <>
      <h2 className="text-xl undefined">Widgets</h2>
      <div className="pt-3">
        <div className="mb-4 space-x-1">
          <Button doClick={handleClick} disabled={disabled}>
            <RiAddCircleLine className={iconSty} /> Add Widget
          </Button>
          <Button
            doClick={handleSetting}
            checkColor="darkGray"
            disabled={!disabled}
          >
            <RiSettings3Line className={iconSty} /> Settings
          </Button>
        </div>

        <div className={cardSty}>{addWidgetPanal()}</div>

        {modalActiveMenu && (
          <Modal onCancel={handleCancel}>
            <h2 className="text-xl undefined">Add widget</h2>
            <div className=" flex flex-wrap text-center mt-1.5 -ml-1.5">
              <div onClick={handleJustSay} className={menuSty}>
                <WidgetsCard title="JustSay">
                  <AiOutlineMessage className={ct} />
                </WidgetsCard>
              </div>
              <div onClick={handleCounter} className={menuSty}>
                <WidgetsCard title="Counter">
                  <RiIncreaseDecreaseLine className={ct} />
                </WidgetsCard>
              </div>
              <div
                onClick={() => {
                  handleAdd("timer", ""); // ส่ง type="timer", value=""
                }}
                className={menuSty}
              >
                <WidgetsCard title="Timer">
                  <IoTimerOutline className={ct} />
                </WidgetsCard>
              </div>
            </div>
          </Modal>
        )}

        {modalActiveJustSay && (
          <Modal onCancel={handleCancel}>
            <AddJustSay onAdd={handleAdd} />
          </Modal>
        )}

        {modalActiveCounter && (
          <Modal onCancel={handleCancel}>
            <AddCounter onAdd={handleAdd} />
          </Modal>
        )}

        {modalActiveSetting && (
          <Modal onCancel={handleCancel}>
            <ModalSetting listAllWidgets={listAllWidgets}>
              <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
                <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                  Reset Zone
                </h2>
                <div className="flex items-center">
                  <select className="flex-1 mt-1 mr-1.5 py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 text-sm">
                    <option value="Counter">All counters</option>
                    <option value="Timer">All timers</option>
                  </select>

                  <button
                    onClick={handleReset}
                    className="text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600"
                  >
                    {" "}
                    Set zero
                  </button>
                </div>
              </div>
              <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
                <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                  Delete Zone
                </h2>
                <button
                  onClick={handleClear}
                  className="text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600 w-full mb-1"
                >
                  {" "}
                  Delete all widgets
                </button>
              </div>
            </ModalSetting>
          </Modal>
        )}
      </div>
    </>
  );
}

//    Clear ALL Button
//   let SettingBtn = (
//     <Button doClick={handleSetting} checkColor="darkGray" disabled={!disabled}>
//       <RiSettings3Line className={iconSty} /> Settings
//     </Button>
//   );

//   let clearBtn = (
//     <Button doClick={handleClear} disabled={!disabled}>
//       <BiBomb className={iconSty} /> Clear all
//     </Button>
//   );

//   if (listAllWidgets.length > 0) {
//     clearBtn = (
//       <Button doClick={handleClear} disabled={!disabled}>
//         <BiBomb className={iconSty} /> Clear all
//       </Button>
//     );
//   }
