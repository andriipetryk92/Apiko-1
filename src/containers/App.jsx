import React, { useState, useEffect, Fragment } from "react";
import { PostList } from "../components/PostList";
import { Loader } from "../components/loader";
import { MoreButton } from "../components/MoreButton";
import { getPosts } from "../services/post.service";

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [countPosts, setCountPosts] = useState(0);
  const onChange = event => setInputValue(event.target.value);

  useEffect(() => {
    getPosts(
      response =>
        response.length > countPosts &&
        setPosts(response.slice(0, countPosts + 10))
    );
  }, [countPosts]);

  const getNextPage = () => setCountPosts(countPosts => countPosts + 10);

  const regex = new RegExp(inputValue, "i");

  const contentPosts = inputValue
    ? posts.filter(post => regex.test(post.body) || regex.test(post.title))
    : posts;

  return (
    <div className="content">
      {posts.length ? (
        <Fragment>
          <input
            type="text"
            onChange={onChange}
            value={inputValue}
            placeholder="Enter word to filter"
          />
          <Fragment>
            <PostList posts={contentPosts} />
          </Fragment>
          {posts.length !== 100 && <MoreButton newCountPosts={getNextPage} />}
        </Fragment>
      ) : (
        <Loader />
      )}
    </div>
  );
};
