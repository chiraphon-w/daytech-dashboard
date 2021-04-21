import React from 'react'
import classnames from 'classnames'

const Button = ({  disabled, children, doClick = () => {}, red  }) => {
    function getButtonClass() {
    return classnames(
        "text-white focus:outline-none px-4 py-1 rounded-md",
        {
            "bg-blue-500 hover:bg-blue-600": !disabled,
            "bg-gray-300": disabled || !red,
            "bg-red-500 hover:bg-red-600" : red,

        });
    }

    // function handleClickAdd() {
    //     doClick()
    // }
    return (
      <button className={getButtonClass()} onClick={doClick}>{children}</button>
    );
  }

export default Button;