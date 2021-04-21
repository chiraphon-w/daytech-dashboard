import React, { useState } from "react";
import Modal from "./Layouts/Modal";
import {
  RiAddCircleLine,
  RiIncreaseDecreaseLine,
  RiSettings3Line,
} from "react-icons/ri";
import { BiBomb } from "react-icons/bi";
import WidgetsCard from "./Layouts/WidgetsCard";
import { AiOutlineMessage } from "react-icons/ai";
import { IoTimerOutline } from "react-icons/io5";

import NoWidgets from "./Layouts/NoWidgets";
import AddJustSay from "./AddWidgets/AddJustSay";
import AddCounter from "./AddWidgets/AddCounter";
import JustSay from "./JustSay";
import Counter from "./Counter";
import Button from "./Buttons/Button";
import Timer from "./Timer";
import ModalSetting from "./ModalSetting";

export default function WidgetTools() {
  const [modalActiveMenu, setModalActiveMenu] = useState(false);
  const [modalActiveJustSay, setModalActiveJustSay] = useState(false);
  const [modalActiveCounter, setModalActiveCounter] = useState(false);
  const [modalActiveSetting, setModalActiveSetting] = useState(false);

  const [justSay, setJustSay] = useState("");
  const [counter, setCounter] = useState("");
  const [timer, setTimer] = useState("");
  const [listAllWidgets, setListAllWidgets] = useState([]);
  let disabled = false;
  let checkColor = "";
  //   let red="";
  //   let darkGray="";

  const handleClick = function () {
    setModalActiveMenu(true);
  };
  const handleJustSay = function () {
    setModalActiveJustSay(true);
    setModalActiveMenu(true);
    setJustSay();
  };
  const handleCounter = function () {
    setModalActiveCounter(true);
    setModalActiveMenu(false);
    setCounter();
  };
  const handleTimer = function () {
    setModalActiveMenu(false);
    setTimer("");
    handleCancel();

    let id;
    if (listAllWidgets.length == 0) {
      id = 1;
    } else {
      const lastArray = listAllWidgets.slice(-1).pop(); // .slice(-1).pop() เลือก array ตัวสุดท้ายมาให้
      id = lastArray.id + 1;
    }
    const data = {
      value: "",
      id: id,
      date: realTime,
      type: "timer",
    };
    setListAllWidgets([...listAllWidgets, data]);
  };

  const handleCancel = function () {
    setModalActiveMenu(false);
    setModalActiveJustSay(false);
    setModalActiveCounter(false);
    setModalActiveSetting(false);
  };

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

  let ct = "mx-auto text-4xl";
  let menuSty = "w-1/3 pt-1.5 pl-1.5";
  let cardSty = "md:flex md:flex-wrap md:-mr-4";

  let iconSty = "inline-block text-xl relative -top-0.5";

  const handleClear = function () {
    setListAllWidgets([]);
  };
  const handleSetting = function () {
    setModalActiveSetting(true);
  };

  let SettingBtn = (
    <Button doClick={handleSetting} checkColor="darkGray" disabled={!disabled}>
      <RiSettings3Line className={iconSty} /> Settings
    </Button>
  );

  console.log(SettingBtn);

  let clearBtn = (
    <Button doClick={handleClear} disabled={!disabled}>
      <BiBomb className={iconSty} /> Clear all
    </Button>
  );

  if (listAllWidgets.length > 0) {
    clearBtn = (
      <Button doClick={handleClear} disabled={!disabled}>
        <BiBomb className={iconSty} /> Clear all
      </Button>
    );
  }

  const handleAddWidgets = function () {
    if (listAllWidgets.length > 0) {
      console.log(listAllWidgets);
      return listAllWidgets.map((list, index) => {
        if (list.type === "justSay") {
          return <JustSay key={index} title={justSay} list={list} />;
        } else if (list.type === "counter") {
          return <Counter key={index} title={counter} list={list} />;
        } else if (list.type === "timer") {
          return <Timer key={index} title={timer} list={list} />;
        }
      });
    } else {
      return (
        <>
          <NoWidgets />
        </>
      );
    }
  };

  return (
    <>
      <h2 className="text-xl undefined">Widgets</h2>
      <div className="pt-3">
        <div className="mb-4 space-x-1.5">
          <Button doClick={handleClick} disabled={disabled}>
            <RiAddCircleLine className={iconSty} /> Add Widget
          </Button>
          {SettingBtn}
        </div>

        <div className={cardSty}>{handleAddWidgets()}</div>

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
              <div onClick={handleTimer} className={menuSty}>
                <WidgetsCard title="Timer">
                  <IoTimerOutline className={ct} />
                </WidgetsCard>
              </div>
            </div>
          </Modal>
        )}

        {modalActiveJustSay && (
          <Modal onCancel={handleCancel}>
            <AddJustSay
              setJustSay={setJustSay}
              handleAddWidgets={handleAddWidgets}
              handleCancel={handleCancel}
              setListAllWidgets={setListAllWidgets}
              listAllWidgets={listAllWidgets}
              realTime={realTime}
            />
          </Modal>
        )}

        {modalActiveCounter && (
          <Modal onCancel={handleCancel}>
            <AddCounter
              setCounter={setCounter}
              handleAddWidgets={handleAddWidgets}
              handleCancel={handleCancel}
              setListAllWidgets={setListAllWidgets}
              listAllWidgets={listAllWidgets}
              realTime={realTime}
            />
          </Modal>
        )}
        {modalActiveSetting && (
          <Modal onCancel={handleCancel}>
            <ModalSetting
            //   setJustSay={setJustSay}
            //   handleAddWidgets={handleAddWidgets}
            //   handleCancel={handleCancel}
            //   setListAllWidgets={setListAllWidgets}
            //   listAllWidgets={listAllWidgets}
            //   realTime={realTime}
            />
          </Modal>
        )}
      </div>
    </>
  );
}
