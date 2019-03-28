import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardHeader, Col} from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// const Post = props => {
//   return (
//     <div className='post'>
//       <div className='opUserInfo'>
//         <img src={props.post.thumbnailUrl} alt='Avatar' className='avatar' />
//         <h3 className='post-header'>{props.post.username}</h3>
//       </div>
//       <img src={props.post.imageUrl} alt='Original Post'/>
//       <CommentSection 
//         comments={props.post.comments}
//         likes={props.post.likes}
//       />
//       <div className='comment-time'>{props.post.timestamp}</div>
//     </div>
//   )
// }

// export default Post;






const Post = props => {
  return (
    <div class='container-fluid'>
    <div class='row'>
    <Col md='6' className='column'>
    {/* <div className='post'> */}
      <Card className='opUserInfo'>
      <CardHeader className='card-header'>
       <img src={props.post.thumbnailUrl} alt='Avatar' className='avatar' /> 
        <CardTitle className='post-header'>{props.post.username}</CardTitle>
        </CardHeader>
         <CardBody className='card-body'>
      <CardImg src={props.post.imageUrl} alt='Original Post' />
      <CommentSection 
        comments={props.post.comments}
        likes={props.post.likes}
      />
      <div className='comment-time'>{props.post.timestamp}</div>
      </CardBody>
      </Card>
    </Col>
      </div>
      </div>
         
 
  )
}


Post.propTypes = {
  Post: PropTypes.shape({
    timestamp: PropTypes.string.isRequired,
    imageUrl: PropTypes.symbol.isRequired,
    comments: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.symbol.isRequired
  })
}



export default Post;


//styled components//