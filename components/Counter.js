import React, { useState } from 'react'
import Card from '../components/Layouts/Card'
import Button from '../components/Buttons/Button'

export default function Counter() {
    const [count, setCount] = useState(0);
    
    let countClass = "text-5xl rounded-full w-10 text-center focus:outline-none";
    let countBlue = "text-blue-500";
    let countGray = "text-gray-300";

    let resetButton;
    let decrease;

    if (count == 0) {
        resetButton = <button><Button check={"gray"} buttonName="Reset" /></button>
        decrease = <button className={`${countClass} + ${countGray}`}>-</button>
    }
    else {
        resetButton = <button onClick={() => setCount(0)}><Button check={"blue"} buttonName="Reset" /></button>
        decrease = <button onClick={() => setCount(count - 1)} className={`${countClass} + ${countBlue}`}>-</button>
    }

    return (
        <Card title="Counter">
            <div className="text-center">
                <div className="flex items-center justify-center mt-4 mb-6">
                    {decrease}
                    <div className="text-6xl mx-7">{count}</div>
                    <button onClick={() => setCount(count + 1)} className={`${countClass} + ${countBlue}`}>+</button>
                </div>
                {resetButton}
            </div>
        </Card>

    )
}