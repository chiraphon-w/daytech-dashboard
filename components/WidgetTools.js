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
import NoWidgets from "./Layouts/NoWidgets";
import Modal from "./Layouts/Modal";

import AddJustSay from "./AddWidgets/AddJustSay";
import AddCounter from "./AddWidgets/AddCounter";
import JustSay from "./JustSay";
import Counter from "./Counter";
import Timer from "./Timer";

export default function WidgetTools() {
  const [modalActiveMenu, setModalActiveMenu] = useState(false);
  const [modalActiveJustSay, setModalActiveJustSay] = useState(false);
  const [modalActiveCounter, setModalActiveCounter] = useState(false);
  const [modalActiveSetting, setModalActiveSetting] = useState(false);

  const [listAllWidgets, setListAllWidgets] = useState([]);
  const [Widgets, setWidgets] = useState([]);
  const [selectedWidget, setSelectedWidget] = useState([]);

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
  const handleClear = function () {
    setListAllWidgets([]);
  };
  const handleSetting = function () {
    setModalActiveSetting(true);
    setListAllWidgets([]);
  };

  let ct = "mx-auto text-4xl";
  let menuSty = "w-1/3 pt-1.5 pl-1.5";
  let cardSty = "md:flex md:flex-wrap md:-mr-4";
  let iconSty = "inline-block text-xl relative -top-0.5";
  let disabled = false;

  //   function realTime
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

  const addWidgetPanal = function () {
    if (listAllWidgets.length > 0) {
      return listAllWidgets.map((list) => {
        if (list.type === "justSay") {
          return (
            <JustSay
              key={list.id}
              list={list}
              onDelete={handleDelete}
              setSelectedWidget={setSelectedWidget}
            />
          );
        } else if (list.type === "counter") {
          return (
            <Counter
              key={list.id}
              list={list}
              onDelete={handleDelete}
              setSelectedWidget={setSelectedWidget}
            />
          );
        } else if (list.type === "timer") {
          return (
            <Timer
              key={list.id}
              list={list}
              onDelete={handleDelete}
              setSelectedWidget={setSelectedWidget}
            />
          );
        }
      });
    } else {
      return <NoWidgets />;
    }
  };

  const handleDelete = function (list) {
    // console.log("listAllWidgets 1", listAllWidgets);
    if (listAllWidgets.length > 0) {
      setListAllWidgets(
        listAllWidgets.filter((widget) => widget.id !== list.id)
      );

      // console.log("selectedWidget", selectedWidget);
      // console.log("listAllWidgets 2", listAllWidgets);
      //   console.log("widget", widget);
      //   return listAllWidgets.map((list, index) => {
      //     if (list.type === "justSay") {
      //       return <JustSay key={index} list={list} onDelete={handleDelete}/>;
      //     } else if (list.type === "counter") {
      //       return <Counter key={index} list={list} />;
      //     } else if (list.type === "timer") {
      //       return <Timer key={index} list={list} />;
      //     }
      //   });
      // } else {
      //   return <NoWidgets />;
    }
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
          {/* {SettingBtn} */}
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
            <ModalSetting onAdd={handleAdd} />
          </Modal>
        )}
      </div>
    </>
  );
}
