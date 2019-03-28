import React from 'react';
import Post from './Post';
import styled from 'styled-components';
import './PostContainer.css';

const PostContainer = props => {
  return (
    <div>
      {props.postData.map((post, i) => {
        return (
          <div className='postContainer' key={i}>
            <Post post={post} />
            
          </div>
        )
      })}
    </div>
  )
}

export default PostContainer;


//styled components//

const PostContainerDiv = styled.div`
  /* border: 5px solid orange; */
  /* /* display: flex; */
  max-width: 100%;
  /* justify-content: center;
  align-items: center; */

`