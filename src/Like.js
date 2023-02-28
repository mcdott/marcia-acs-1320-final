import React, { useState } from "react";
import "./Like.css";

function Like() {
  const [likesCount, setLikesCount] = useState(0);

  const incrementLikes = () => {
    setLikesCount(likesCount + 1);
  };

  const decrementLikes = () => {
    setLikesCount(likesCount - 1);
  };

  return (
    <div className='likes'>
      <button onClick={incrementLikes}>👍</button>
      <h2>{likesCount}</h2>
      <button onClick={decrementLikes}>👎</button>
    </div>
  );
}

export default Like;
