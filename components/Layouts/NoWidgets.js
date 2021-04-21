import React from "react";

export default function NoWidgets({ title, children, handleClick = () => {} }) {
  return (
    <>
      <div className="md:inner md:w-1/2 pb-4 md:pr-4">
        <div className="p-5 border-1 bg-white rounded-2xl relative undefined">
          <h2 className="text-lg font-bold text-gray-400 mb-1.5" />
          <div className="text-center text-gray-400 my-8 font-light">
            <p className="text-4xl mb-2">No widgets at all</p>
            <p>
              Click{" "}
              <button
                onClick={handleClick}
                className="font-normal text-blue-400 focus:outline-none"
              >
                HERE{" "}
              </button>{" "}
              to add a new one
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
