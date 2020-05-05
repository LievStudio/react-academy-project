import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import EditPostIcon from "./EditPostIcon";
import DeletePost from "./DeletePost";
import "./styles/posts.css";

const Post = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [post, setPost] = useState(props.post);

  useEffect(() => {
    setPost(props.post);
  }, [props.post]);

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="post"
    >
      <Link
        to={"/post/" + post.id}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div
          className="post-background"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="post-content">
            <h3>{post.title}</h3>
            <div className="post-comments">
              {post.comments.length}{" "}
              {post.comments.length === 1 ? "Comment " : "Comments "}
              <QuestionAnswerOutlinedIcon></QuestionAnswerOutlinedIcon>
            </div>
            <p className="post-shortdescription">{post.shortDescription}</p>
            <h4 className="post-category">{post.category}</h4>
          </div>
        </div>
      </Link>

      {isShown && (
        <div className="post-actions">
          <EditPostIcon
            postId={post.id}
            onClick={props.onClick}
            handleOpen={props.handleOpen}
            fetchPost={props.fetchPost}
          />
          <DeletePost
            onClick={props.onClick}
            onDelete={props.onDelete}
            id={post.id}
          />
        </div>
      )}
    </div>
  );
};

export default Post;
