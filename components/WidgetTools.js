import React, { useState } from 'react';
import Modal from '../components/Modal'
import { RiAddCircleLine } from 'react-icons/ri'
import { BiBomb } from 'react-icons/bi'
import { AiOutlineMessage } from 'react-icons/ai'
import { RiIncreaseDecreaseLine } from 'react-icons/ri'
import { IoTimerOutline } from 'react-icons/io5'
import AddWidgets from './Layouts/WidgetsMenu'


export default function WidgetTools() {
    const [modalActive, setModalActive] = useState(false);
    const handleClick = function () {
        setModalActive(true);
    };
    const handleCancel = function () {
        setModalActive(false);
    };
    return (
        // <div className="pt-3">
        <div className="mb-4 space-x-1">
            <button onClick={handleClick} className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600">
                <RiAddCircleLine className="inline-block text-xl relative -top-0.5" /> Add Widget</button>
            <button className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300">
                <BiBomb className="inline-block text-xl relative -top-0.5" /> Clear all</button>

            {modalActive && (
                <Modal onCancel={handleCancel}>
                    <div>
                        <h2 className="text-xl undefined">Add widget</h2>
                        <div className=" flex flex-wrap text-center mt-1.5 -ml-1.5">
                            <AddWidgets title="JustSay">
                                <AiOutlineMessage className="mx-auto text-4xl" />
                            </AddWidgets>
                            <AddWidgets title="Counter">
                                <RiIncreaseDecreaseLine className="mx-auto text-4xl"/>
                            </AddWidgets>
                            <AddWidgets title="Timer">
                                <IoTimerOutline className="mx-auto text-4xl"/>
                            </AddWidgets>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}

