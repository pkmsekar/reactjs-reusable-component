import React from 'react';

const ErrorComponent = ({message}) =>(
  <div>{message &&
    <span className="text-danger">{message}</span>
  }</div>
)

export default ErrorComponent;
