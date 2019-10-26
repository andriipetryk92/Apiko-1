import React from "react";
import { PostListItem } from "./PostListItem";
import T from "prop-types";

export const PostList = ({ posts }) => {
  return (
    <ul className="list">
      {posts.map(post => (
        <PostListItem key={post.id} {...post} />
      ))}
    </ul>
  );
};

PostList.propTypes = {
  posts: T.array.isRequired
};
