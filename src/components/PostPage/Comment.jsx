import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Comment = (props) => {
  return (
    <div className="comment-item">
      <div className="icon">
        <AccountCircleIcon className="icon-account" />
      </div>
      <div className="comment-item-content">
        <div className="author">{props.comment.author}</div>
        <div className="comment">{props.comment.content}</div>
      </div>
    </div>
  );
};

export default Comment;
