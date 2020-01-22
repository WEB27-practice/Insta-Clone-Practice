import React from 'react';

const LikeSection = props => {
  console.log('Props in LikeSection', props);

  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={props.oneLike}/>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number"> {props.likes} likes</p>
</div>
  )
};

export default LikeSection;