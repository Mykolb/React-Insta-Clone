import React from 'react';
import './SearchBar.css';
import { Form, FormGroup, Input } from 'reactstrap';
import * as Icon from 'react-feather';
import styled from 'styled-components';

const SearchBar = props => {
   return (
     <SearchBarDiv>
       <SearchBarLeftDiv>
         <Icon.Instagram className='instaIcon' />
        <img className='instaCursive'
          src='https://fontmeme.com/images/instagram-new-logo.png'
          alt='Instagram Cursive' />
      </SearchBarLeftDiv>
      <Form className='searchBarMiddle'>
        <FormGroup>
        <Input 
          type='search'
          name='search'
          onChange={props.searchPosts}
          placeholder='🔍 Search'/>
        </FormGroup>
      </Form>
      <SearchBarRightDiv >
        <Icon.Compass className='navIcons' />
        <Icon.Heart className='navIcons' />
        <Icon.User className='navIcons' />
      </SearchBarRightDiv > 
     </SearchBarDiv> 
   )
} 



export default SearchBar;


//Styled Components//

const SearchBarDiv = styled.div`
    display: flex;
    border-bottom: 1px solid lightgray;
    position: fixed;
    background-color: white;
    margin-top: 0px;
    width: 100%;
    overflow: hidden;
    z-index:1;
`

const SearchBarLeftDiv = styled.div`
  /* border: 1px solid blue; */
    width: 30%;
    margin-top: 1.5%;
`

const SearchBarRightDiv = styled.div`
   /* border: 1px solid green; */
    width: 30%;
    margin-top: 1.5%;

`