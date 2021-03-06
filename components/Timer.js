import React, { useState, useEffect } from 'react'
import Card from '../components/Layouts/Card'
import Button from '../components/Buttons/Button'

export default function Timer() {
    let disabled = true
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

    const handleClick1 = () => {
        setTimerOn(true);
    }

    const handleClick2 = () => {
        setTimerOn(false);
    }

    const handleClick3 = () => {
        setTime(0); 
        setTimerOn(false);
    }


    return (
        <Card title="Timer">
            <div className="text-center space-x-1">
                <div className="text-6xl mx-7 flex items-center justify-center mt-4 mb-6">
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                </div>
                {!timerOn && (
                    <Button doClick={handleClick1} disabled={!disabled} >Start</Button>
                )}
                {timerOn && (
                    <Button doClick={handleClick2} disabled={!disabled} >Pause</Button>
                )}
                {!timerOn && time == 0 && (
                    <Button doClick={handleClick3} disabled={disabled} >Reset</Button>
                )}
                {timerOn && (
                    <Button doClick={handleClick3} disabled={!disabled} >Reset</Button>
                )}
                {!timerOn && time > 0 && (
                    <Button doClick={handleClick3} disabled={!disabled} >Reset</Button>
                )}
            </div>
        </Card>

    )
}