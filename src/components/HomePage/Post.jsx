import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import EditPostIcon from "./EditPostIcon";
import DeletePost from "./DeletePost";
import "./styles/posts.css";

const Post = (props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="post"
    >
      <Link
        to={"/post/" + props.post.id}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div
          className="post-background"
          style={{ backgroundImage: `url(${props.post.image})` }}
        >
          <div className="post-content">
            <h3>{props.post.title}</h3>
            <div className="post-comments">
              {props.post.comments.length}{" "}
              {props.post.comments.length === 1 ? "Comment " : "Comments "}
              <QuestionAnswerOutlinedIcon></QuestionAnswerOutlinedIcon>
            </div>
            <p className="post-shortdescription">
              {props.post.shortDescription}
            </p>
            <h4 className="post-category">{props.post.category}</h4>
          </div>
        </div>
      </Link>

      {isShown && (
        <div className="post-actions">
          <EditPostIcon
            postId={props.post.id}
            onClick={props.onClick}
            handleOpen={props.handleOpen}
            fetchPost={props.fetchPost}
          />
          <DeletePost
            onClick={props.onClick}
            onDelete={props.onDelete}
            id={props.post.id}
          />
        </div>
      )}
    </div>
  );
};

export default Post;
