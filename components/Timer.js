import React, { useState, useEffect } from "react";
import Card from "../components/Layouts/Card";
import Button from "../components/Buttons/Button";

export default function Timer({ list, onDelete }) {
  let disabled = true;
  const [time, setTime] = useState(0); //onUpdate
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const handleClickStart = () => {
    setTimerOn(true);
  };

  const handleClickPause = () => {
    setTimerOn(false);
  };

  const handleClickReset = () => {
    setTime(0);
    setTimerOn(false);
  };
  
  const handleDelete = function () {
    onDelete(list);
  }

  const formatTime = () => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    return `${getMinutes}:${getSeconds}`;
  };


  list.value = time;
  return (
    <Card title="Timer" key={list.id} onDelete={handleDelete}>
      <div className="text-center space-x-1">
        <div className="text-6xl mx-7 flex items-center justify-center mt-4 mb-6">
           <div className='text-6xl mx-7'>{formatTime(time)}</div>
        </div>
        {!timerOn && (
          <Button doClick={handleClickStart} disabled={!disabled}>
            Start
          </Button>
        )}
        {timerOn && (
          <Button doClick={handleClickPause} disabled={!disabled}>
            Pause
          </Button>
        )}
        {!timerOn && time == 0 && (
          <Button doClick={handleClickReset} disabled={disabled}>
            Reset
          </Button>
        )}
        {timerOn && (
          <Button doClick={handleClickReset} disabled={!disabled}>
            Reset
          </Button>
        )}
        {!timerOn && time > 0 && (
          <Button doClick={handleClickReset} disabled={!disabled}>
            Reset
          </Button>
        )}
      </div>
      <div className="text-xs text-gray-400">
        <div className="mt-6 -mb-2 text-center">{list.date}</div>
      </div>
    </Card>
  );
}
