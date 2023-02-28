import React, { useState } from "react";

function Like() {
  const [likesCount, setLikesCount] = useState(0);

  const incrementLikes = () => {
    setLikesCount(likesCount + 1);
  };

  const decrementLikes = () => {
    setLikesCount(likesCount - 1);
  };

  return (
    <div>
      <button onClick={incrementLikes}>👍</button>
      <h2>{likesCount}</h2>
      <button onClick={decrementLikes}>👎</button>
    </div>
  );
}

export default Like;
