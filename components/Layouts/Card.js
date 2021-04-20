import React from "react";

export default function Card({ title, children }) {
  return (
      <div className="md:inner md:w-1/2 pb-4 md:pr-4">
        <div className="p-5 border-1 bg-white rounded-2xl">
          <h2 className="text-lg font-bold text-gray-400 mb-1.5">{title}</h2>
          {children}
        </div>
    </div>
  );
}
