import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
// import {Card, CardBody, CardImg, CardText, CardBOdy, CardTitle, CardSubtitle} from 'reactstrap';

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





// const Post = props => {
//   return (
//     <div className='post'>
//       <Card className='opUserInfo'>
//       <CardBody>
//        <CardImg src={props.post.thumbnailUrl} alt='Avatar' className='avatar' /> 
//         <CardTitle className='post-header'>{props.post.username}</CardTitle>
//         </CardBody>
//          <CardBody>
//       <CardImg src={props.post.imageUrl} alt='Original Post'/>
//       <CommentSection 
//         comments={props.post.comments}
//         likes={props.post.likes}
//       />
//       <div className='comment-time'>{props.post.timestamp}</div>
//       </CardBody>
//       </Card>
//     </div>
  
//   )
// }

// export default Post;