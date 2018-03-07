import React from 'react';
import InputComponent from '../../shared/InputComponent';
import Button from '../../shared/Button';

const LoginComponent = ({doLogin,handleChange,errors,touched}) =>(
  <div>
    <form>
    <InputComponent
    inputType="text"
    onChange={handleChange}
    name="username"
    placeholder="Enter User name"
    id="username"
    label="UserName"
    error={errors.username}
      />
    <InputComponent
    inputType="password"
    onChange={handleChange}
    name="password"
    placeholder="Enter Password"
    id="password"
    label="Password"
    error={errors.password}
     />
    <Button
    onClick={doLogin}
    classNames="btn btn-success"
    value="Login"
    disabled={errors.username || errors.password || !touched}
     />
    </form>
  </div>
)

export default LoginComponent;
