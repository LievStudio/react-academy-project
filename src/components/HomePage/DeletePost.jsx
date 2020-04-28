import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const DeletePost = (props) => {
  return (
    <>
      <DeleteIcon onClick={() => props.onDelete(props.id)} />
    </>
  );
};

export default DeletePost;
