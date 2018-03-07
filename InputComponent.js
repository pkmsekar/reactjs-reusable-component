import React from 'react';
import ErrorComponent from './ErrorComponent';

const InputComponent = ({inputType,name,label,onChange,placeholder,error}) =>(
  <div>
    <div className="form-group">
    <label>{label}</label>
    <input
    type={inputType}
    name={name}
    className="form-control"
    placeholder={placeholder}
    aria-describedby="sizing-addon1"
    onChange={onChange}
     />
    </div>
    <ErrorComponent message={error} />
  </div>
)

export default InputComponent;
