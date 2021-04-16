import React from 'react'
import classnames from 'classnames'

const Button = ({  doClick, disabled, children }) => {
    function getButtonClass() {
    return classnames(
        "text-white focus:outline-none px-4 py-1 rounded-md",
        {
            "bg-blue-500 hover:bg-blue-600": !disabled,
            "bg-gray-300": disabled,
        });
    }
    function handleClick() {
        doClick()
    }
    return (
      <button className={getButtonClass()} onClick={handleClick}>{children}</button>
    );
  }

export default Button;
