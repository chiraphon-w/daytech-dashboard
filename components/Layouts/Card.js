import React from "react";
import { IoClose } from "react-icons/io5";

export default function Card({ title, children, onCancel = () => {}  }) {
  return (
    <div className="md:inner md:w-1/2 pb-4 md:pr-4">
      <div className="p-5 border-1 bg-white rounded-2xl relative undefined">
        <h2 className="text-lg font-bold text-gray-400 mb-1.5">{title}</h2>
        <div className="absolute top-5 right-5">
          <button
            className="text-lg text-gray-600 focus:outline-none undefined"
            onClick={onCancel}
          >
            <IoClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
