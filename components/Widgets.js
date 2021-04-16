import React from 'react'
import JustSay from './JustSay'
import Timer from './Timer'
import Counter from './Counter'
import WidgetTools from './WidgetTools'
import NoWidgets from './NoWidgets'
import Modal from './Modal'

export default function Widgets() {

  
    return (

        <div>
            <h2 className="text-2xl undefined">Widgets</h2>
            <div className="pt-3">
                <WidgetTools />
                <div className="md:masonry">
                    {/* <Modal> */}
                        {/* <JustSay />
                        <Counter />
                        <Timer /> */}
                    {/* </Modal> */}
                </div>
            </div>
        </div>


    );
}
