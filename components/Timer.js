import React, { useState, useEffect } from 'react'
import Card from '../components/Layouts/Card'
import Button from '../components/Buttons/Button'

export default function Timer() {

    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    
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
        <Card title="Timer">
            <div className="text-center space-x-1">
                <div className="text-6xl mx-7 flex items-center justify-center mt-4 mb-6">
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                </div>
                {!timerOn && (
                    <button onClick={() => setTimerOn(true)}><Button check={"blue"} buttonName="Start" /></button>
                )}
                {timerOn && (
                    <button onClick={() => setTimerOn(false)}><Button check={"blue"} buttonName="Pause" /></button>
                )}
                {!timerOn && time == 0 && (
                    <button onClick={() => { setTime(0); setTimerOn(false) }}><Button check={"gray"} buttonName="Reset" /></button>
                )}
                {timerOn && (
                    <button onClick={() => { setTime(0); setTimerOn(false) }}><Button check={"blue"} buttonName="Reset" /></button>
                )}
                {!timerOn && time > 0 && (
                    <button onClick={() => { setTime(0); setTimerOn(false) }}><Button check={"blue"} buttonName="Reset" /></button>
                )}
            </div>
        </Card>

    )
}