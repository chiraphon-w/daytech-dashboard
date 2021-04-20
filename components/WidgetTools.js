import React, { useState } from "react";
import Modal from "../components/Modal";
import { RiAddCircleLine, RiIncreaseDecreaseLine } from "react-icons/ri";
import { BiBomb } from "react-icons/bi";

import WidgetsCard from "./Layouts/WidgetsCard";
import { AiOutlineMessage } from "react-icons/ai";
import { IoTimerOutline } from "react-icons/io5";

import Card from "./Layouts/Card";
import AddJustSay from "./AddWidgets/AddJustSay";
import AddCounter from "./AddWidgets/AddCounter";
import JustSay from "./JustSay";
import Counter from "./Counter";
import Button from "./Buttons/Button";
import Timer from "./Timer";

export default function WidgetTools() {
  const [modalActiveMenu, setModalActiveMenu] = useState(false);
  const [modalActiveJustSay, setModalActiveJustSay] = useState(false);
  const [modalActiveCounter, setModalActiveCounter] = useState(false);

  const [justSay, setJustSay] = useState("");
  const [counter, setCounter] = useState("");
  const [timer, setTimer] = useState("");
  const [listAllWidgets, setListAllWidgets] = useState([]);

  const handleClick = function () {
    setModalActiveMenu(true);
  };
  const handleJustSay = function () {
    setModalActiveJustSay(true);
    setModalActiveMenu(false);
    setJustSay();
  };
  const handleCounter = function () {
    setModalActiveCounter(true);
    setModalActiveMenu(false);
    setCounter();
  };
  const handleTimer = function () {
    setModalActiveMenu(false);
  };
  const handleCancel = function () {
    setModalActiveMenu(false);
    setModalActiveJustSay(false);
    setModalActiveCounter(false);
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
  let disabled = true;
  let check;

  //

  const handleAddWidgets = function (key = 15454) {
    if (listAllWidgets.length > 0) {
      console.log(listAllWidgets);
      return listAllWidgets.map((list, index) => {
        if (list.type === "justSay") {
          return <JustSay title={justSay} list={list} />;
        } else if (list.type === "counter") {
          return <Counter title={counter} list={list} />;
        }
      });
      console.log("if counter");
    } else {
      return (
        <>
          {/* <div className={cardSty}> */}
          <Card title=" ">
            <div className="text-center text-gray-400 my-8 font-light">
              <p className="text-4xl mb-2">No widgets at all </p>
              <p>
                Click{" "}
                <button
                  onClick={handleClick}
                  className="font-normal text-blue-400 focus:outline-none"
                >
                  {" "}
                  HERE{" "}
                </button>{" "}
                to add a new one
              </p>
            </div>
          </Card>
          {/* </div> */}
        </>
      );
    }
  };

  return (
    <>
      <h2 className="text-xl undefined">Widgets</h2>
      <div className="pt-3">
        <div className="mb-4 space-x-1">
          <Button doClick={handleClick} disabled={!disabled}>
            <RiAddCircleLine className="inline-block text-xl relative -top-0.5" />{" "}
            Add Widget
          </Button>

          <Button disabled={disabled}>
            <BiBomb className="inline-block text-xl relative -top-0.5" /> Clear
            all
          </Button>
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
              handleCancel={handleCancel}
              setListAllWidgets={setListAllWidgets}
              listAllWidgets={listAllWidgets}
              realTime={realTime}
            />
          </Modal>
        )}
        {handleAddWidgets}
      </div>
    </>
  );
}
