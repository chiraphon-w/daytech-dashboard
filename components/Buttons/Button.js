import React from 'react'

const Button = ({ check, buttonName }) => {

    function getButtonClass() {
        let ButtonClass = "text-white focus:outline-none px-4 py-1 rounded-md";
        if (check == "blue") {
            ButtonClass = `${ButtonClass} bg-blue-500 hover:bg-blue-600`;
        } else {
            ButtonClass = `${ButtonClass} bg-gray-300`;
        }
        return ButtonClass;
    }


    return (
        <div className={getButtonClass()}>{buttonName}</div>
    );
};

export default Button;
