import React, {Component} from 'react';
import Phones from '../LogIn/phones.png';
//css imports
import './LogIn.css';
import {Button, Form, FormGroup, Input} from 'reactstrap';
//installed imports
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import styled from 'styled-components';




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

handleLogOutSubmit = e => {
    const user = this.state.username;
    localStorage.removeItem('user', user)
    window.location.reload()
}

//can create a logout button folowing the same function above just change to removeItem//


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
                <p>Sign up to see photos and videos from imaginary friends.</p>
            <FacebookButton>
                Log in with Facebook
                </FacebookButton>
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
                <button className='signin-btn' color='success' size='large' onClick={this.handleLogInSubmit}> 
                Sign In 
                </button>
                <p>By signing up, you agree to our Terms, Data Policy, and Cookies Policy.</p>
                </FormGroup>
                </Form>
                 </div>
        );
    }
}
 
    

//STYLED COMPONENTS- will give const error if inside a class//



const FacebookButton = styled.button`
    margin: 4% 1% 1.5% 10%;
    width: 80%;
    border-radius: 5px;
    background-color: #4267b2;
    color: white;

    ${FacebookButton}:hover & {
        fill: white;
    }
    `;




    //PROPTYPES//

LogIn.propTypes = {
    LogIn: PropTypes.shape({
        password: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    })
}


export default LogIn;

{/*Created handleinput change 
log in sends user & pwd ibto localstorage, storage for local machine, LS for when you don't need to create a real user or have back API
window location reload*/}