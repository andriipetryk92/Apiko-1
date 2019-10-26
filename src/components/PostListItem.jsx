import React from "react";
import T from "prop-types";

export const PostListItem = ({ body, title, id }) => {
  return (
    <li className="postItem">
      <h3>
        {id}. {title}
      </h3>
      <p>{body}</p>
    </li>
  );
};

PostListItem.propTypes = {
  id: T.number.isRequired,
  title: T.string.isRequired,
  body: T.string.isRequired
};
