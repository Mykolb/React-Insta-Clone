import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Foot} from 'reactstrap';
import './LogIn.css';
import Phones from '../LogIn/phones.png';
import * as Icon from 'react-feather';




class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
            name: '',
            email: ''

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



//can create a ogout button folowing the same function above just change to removeItem//


    render() { 
        return (  
            <div className='container'>

            <div className='image-container'>
            <img className='login-img'
            src={Phones}
            alt='Instagram on cell phones'
            />  
            </div>

            <Form className='login-form'>
            <img className='login-instaCursive'
            src='https://fontmeme.com/images/instagram-new-logo.png'
            alt='Instagram Cursive' />
            <div>
                <p>Sign up to see photos and videos from your friends.</p>
            <button className='facebook-btn' color='success' size='large' onClick={this.handleLogInSubmit}>
                Log in with Facebook
                </button>
            </div>

            {/* <div>
            <p className='p-or'>OR</p>
            </div> */}

            <FormGroup className='login-form1'>
                <Input
                type='text'
                placeholder='Mobile Number or Email'
                name='email'
                value={this.state.email}
                onChange={this.handleInputChange}
                />   
            </FormGroup>

            <FormGroup className='login-form1'>
                <Input
                type='text'
                placeholder='Full Name'
                name='name'
                value={this.state.name}
                onChange={this.handleInputChange}
                />
                </FormGroup>
                {/* <br /> */}

                <FormGroup className='login-form1'>
                <Input
                type='text'
                placeholder='Username'
                name='username'
                value={this.state.username}
                onChange={this.handleInputChange}
                />
                </FormGroup>

                <FormGroup className='login-form1'>
                <Input
                type='password'
                placeholder='Password'
                name='password'
                value={this.state.password}
                onChange={this.handleInputChange}
                />
                {/* <br /> */}
                <button className='login-btn' color='success' size='large' onClick={this.handleLogInSubmit}> 
                Sign In 
                </button>
                <p>By signing up, you agree to our Terms, Data Policy, and Cookies Policy.</p>
                </FormGroup>
                </Form>
                {/* <div className='footer'>
                 <h3 className='login-h3'>ABOUT US</h3>
                 <h3 className='login-h3'>SUPPORT</h3>
                 <h3 className='login-h3'>PRESS</h3>
                 <h3 className='login-h3'>API</h3>
                 <h3 className='login-h3'>JOBS</h3>
                 <h3 className='login-h3'>PRIVACY</h3>
                 <h3 className='login-h3'>TERMS</h3>
                 <h3 className='login-h3' >DIRECTORY</h3>
                 <h3 className='login-h3'>PROFILES</h3>
                 <h3 className='login-h3' >HASHTAGS</h3>
                 <h3 className='login-h3'>LANGUAGE</h3>
                </div> */}
                 </div>
        );
    }
}
 


export default LogIn;

{/*Created handleinput change 
log in sends user & pwd ibto localstorage, storage for local machine, LS for when you don't need to create a real user or have back API
window location reload*/}