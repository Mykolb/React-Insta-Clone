import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


const Post = props => {
  return (
    <div className='post'>
      <div className='opUserInfo'>
        <img src={props.post.thumbnailUrl} alt='Avatar' className='avatar' />
        <h3 className='post-header'>{props.post.username}</h3>
      </div>
      <img src={props.post.imageUrl} alt='Original Post'/>
      <CommentSection 
        comments={props.post.comments}
        likes={props.post.likes}
      />
      <div className='comment-time'>{props.post.timestamp}</div>
    </div>
  )
}

export default Post;