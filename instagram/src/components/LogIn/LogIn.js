import React, {Component} from 'react';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import './LogIn.css'


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: ''
         }
    }


handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value})
}

handleLogInSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user)
    window.location.reload()
}


    render() { 
        return (  
            <Form className='login-form'>
            <img className='login-instaCursive'
            src='https://fontmeme.com/images/instagram-new-logo.png'
            alt='Instagram Cursive' />
            <div>
            <button className='login-btn' color='success' size='large' onClick={this.handleLogInSubmit}>
                Log In
                </button>
            </div>
            <FormGroup className='login-form1'>
                <Input
                type='text'
                placeholder='UserName'
                name='username'
                value={this.state.username}
                onChange={this.handleInputChange}
                />
            </FormGroup>
            <FormGroup className='login-form1'>
                <Input
                type='password'
                placeholder='Type pwd here'
                name='password'
                value={this.state.password}
                onChange={this.handleInputChange}
                />
                <br />
                <p>Have an account? Log in</p>
            </FormGroup>
            </Form>

        );
    }
}
 


export default LogIn;

//Created handleinput change 
//log in sends user & pwd ibto localstorage, storage for local machine, LS for when you don't need to create a real user or have back API
//window location reload 