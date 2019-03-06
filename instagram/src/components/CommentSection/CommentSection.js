import React from 'react';
import './CommentSection.css';
import * as Icon from 'react-feather';
import { Form, Input } from 'reactstrap';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      likes: props.likes,
      comment: '',
      timestamp: props.timestamp
    }

  }

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          text: this.state.comment,
          username: 'Groucho Marx'
        }
      ],
      comment: ''
    })
  }
  handleInputChange = event => {
    console.log(event)
    this.setState({
        comment: event.target.value
    })
  }

  increaseLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    console.log(this.state.likes)
  return (
    <div className='commentSection'>
      <div className='likeAndComment'>
        <Icon.Heart 
          className='icons'
          onClick={this.increaseLikes} />
        <Icon.MessageCircle className='icons' />
      </div>
      <br />
      <p className='likes'>{this.state.likes} likes</p>
      {this.state.comments.map((comment, i) => {
        return (
          <div className='comment' key={i}>
            <h3 className='comment-header'>{comment.username}</h3>
            <p className='comment-p'>{comment.text}</p>
          </div>
        )
      })}
        
        <div className='time'>
        <p className='timestamp'>{this.state.timestamp}</p>
        </div>
        
      <Form className='comment-form' onSubmit={this.addNewComment}>
        <Input 
          name='comment'
          placeholder='Add a comment...'
          type='text'
          onChange={this.handleInputChange}
          value={this.state.comment}
        />
      </Form>
      
      </div>
  )
  }
}

export default CommentSection;