import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    let resetButton;
    let decrease;
    if (count <= 0) {
        resetButton = <button onClick={() => setCount(0)} className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300">Reset</button>
        decrease = <button onClick={() => setCount(0)} className="text-5xl rounded-full w-10 text-center focus:outline-none text-gray-300">-</button>
    }
    else {
        resetButton = <button onClick={() => setCount(0)} className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600">Reset</button>
        decrease = <button onClick={() => setCount(count - 1)} className="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500">-</button>
    }

    return (
        <div className="md:break-inside pb-4">
            <div className="p-5 border-1 bg-white rounded-2xl">
                <h2 className="text-lg font-bold text-gray-400 mb-1.5">Counter</h2>
                <div className="text-center">
                    <div className="flex items-center justify-center mt-4 mb-6">
                        {decrease}
                        <div className="text-6xl mx-7">{count}</div>
                        <button onClick={() => setCount(count + 1)} className="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500">+</button>
                    </div>
                    {resetButton}
                </div>
            </div>
        </div>

    )
}