import React from 'react'
import JustSay from './JustSay'
import Timer from './Timer'
import Counter from './Counter'

export default function Widgets() {
    return (
        <div>
            <h2 className="text-2xl">Widgets</h2>
            <div className="pt-3">
                <div className="md:masonry">
                    <JustSay />
                    <Counter />
                    <Timer />
                </div>
            </div>
        </div>
    );
}