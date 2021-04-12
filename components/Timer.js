import React, { useState, useEffect } from 'react';

export default function Timer() {

    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    let sty = " text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600";
    useEffect(() => {
        let interval = null;
        if (timerOn) {//second
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10) 
            }, 10)
        }
        else {
            clearInterval(interval)
        }

        return () => clearInterval(interval);

    }, [timerOn])


    return (

        <div className="md:break-inside pb-4">
            <div className="p-5 border-1 bg-white rounded-2xl">
                <h2 className="text-lg font-bold text-gray-400 mb-1.5">Timer</h2>
                <div className="text-center space-x-1">
                    <div className="text-6xl mx-7 flex items-center justify-center mt-4 mb-6">
                        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                    </div>
                    {!timerOn && (
                        <button onClick={() => setTimerOn(true)} className={sty}>Start</button>
                    )}
                    {timerOn && (
                        <button onClick={() => setTimerOn(false)} className={sty}>Pause</button>
                    )}
                    {!timerOn && time == 0 && (
                        <button onClick={() => { setTime(0); setTimerOn(false) }} className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300">Reset</button>
                    )}
                    {timerOn && (
                        <button onClick={() => { setTime(0); setTimerOn(false) }} className={sty}>Reset</button>
                    )}
                    {!timerOn && time > 0 && (
                        <button onClick={() => { setTime(0); setTimerOn(false) }} className={sty}>Reset</button>
                    )}
                </div>
            </div>
        </div>
    )
}