import React from "react";

export const MoreButton = ({ newCountPosts = () => {} }) => {
  return <button onClick={newCountPosts}>Next data</button>;
};
