//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log('These are PostsPage props', props);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {props.posts.map((instaPost) => (
        <Post post={instaPost} />
      ))}
    </div>
  );
};

export default PostsPage;