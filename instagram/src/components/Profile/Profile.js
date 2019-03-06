import React from 'react';
import './Profile.css'
import * as Icon from 'react-feather';
import SearchBar from '../SearchBar/SearchBar';











const ProfileContainer = props => {
            { 
        return (  
            <div className='profile-container'>  
            <div className='top-container'>
            <img src='https://i.pinimg.com/originals/0b/c2/40/0bc240bf3ce05448b2b50d8e86f57cc5.gif' alt='profile-pic' className='profile-pic' />
            <h3>TheOfficialMinnieMouse</h3>
            <h3>Post</h3>
            <h3>Followers</h3>
            <h3>Following</h3>
            <button>Edit Profile</button>
            <Icon.Settings className='navicons'/>
            </div>
            <div className='bottom-container'>
            <h3>Posts</h3>
            <h3>IGTV</h3>
            <h3>Saved</h3>
            <h3>Tagged</h3>
            </div>
           {/* PICS GO HERE */}
              </div>
        );
    }
}
 

export default Profile;

