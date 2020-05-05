import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./styles/posts.css";

const PostList = (props) => {
  const [posts, setPosts] = useState(props.posts);

  useEffect(() => {
    setPosts(props.posts);
  }, [props.posts]);

  return (
    <>
      {props.activeCategory === "all"
        ? posts.map((post) => (
            <div key={post.id} className="post-item">
              <Post
                post={post}
                onDelete={props.onDelete}
                handleOpen={props.handleOpen}
                fetchPost={props.fetchPost}
              />
            </div>
          ))
        : posts
            .filter((post) => post.category === props.activeCategory)
            .map((post) => (
              <div key={post.id} className="post-item">
                <Post
                  post={post}
                  onDelete={props.onDelete}
                  handleOpen={props.handleClickOpen}
                  fetchPost={props.fetchPost}
                />
              </div>
            ))}
    </>
  );
};

export default PostList;
