// You will add code to this file
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log('CommentSection props', props);
  console.log('CommentSection props', props.comments);
  
  return (
    <div>
      
      {props.comments.map(userPost => 
        <Comment comment={userPost}/>
      )}
      <CommentInput />
    </div>
  );
};

export default CommentSection;