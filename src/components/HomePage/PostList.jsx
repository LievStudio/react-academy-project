import React from "react";
import Post from "./Post";
import "./styles/posts.css";

const PostList = (props) => {
  return (
    <>
      {props.activeCategory === "all"
        ? props.posts.map((post) => (
            <div key={post.id} className="post-item">
              <Post
                post={post}
                onDelete={props.onDelete}
                handleOpen={props.handleOpen}
                fetchPost={props.fetchPost}
              />
            </div>
          ))
        : props.posts
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
