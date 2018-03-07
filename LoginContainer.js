import React, { Component } from 'react';
import LoginComponent from './LoginComponent';

export default class LoginContainer extends Component {

  constructor() {
    super()
    this.state =  {
      user : {
        username:'',
        password:''
      },
      errors:{
        username:'',
        password:''
      },
      touched:false
    }
  }

  handleChange = (event)=> {
    const { name, value } = event.target;
    const user = {...this.state.user};
    user[name]=value;
    this.setState({touched:true})
    this.setState({user},()=>{
      this.validate();
    });
  }

  validate = ()=> {
    if(!this.state.touched) return;
    const {username, password } = this.state.user;
    const errors = {...this.state.errors};
    errors['username'] = (username==='' ? 'Field is Required' : '');
    errors['password'] = (password==='' ? 'Field is Required' : '');
    this.setState({errors});
  }

  doLogin = ()=> {
    this.validate();
  }

  getProps = () => {
    const props = {
      handleChange:this.handleChange,
      doLogin:this.doLogin,
      errors:this.state.errors,
      touched:this.state.touched
    }
    return props;
  }

  componentDidMount() {
    this.validate();
  }

  render() {
    return (<div>
      <LoginComponent {...this.getProps()}  />
    </div>)

  }
}
