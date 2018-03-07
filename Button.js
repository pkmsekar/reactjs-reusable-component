import React from 'react';

const Button = ({onClick,value,classNames,disabled}) =>(
  <button 
  type="button" 
  className={classNames}
  onClick={onClick}
  disabled={disabled}
  >
    {value}
  </button>
)

export default Button;
