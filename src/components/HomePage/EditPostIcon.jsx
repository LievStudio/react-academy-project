import React from "react";
import EditIcon from "@material-ui/icons/Edit";

const EditPostIcon = (props) => {
  return (
    <>
      <EditIcon
        style={{ marginRight: "20px" }}
        onClick={() => props.fetchPost(props.postId)}
      />
    </>
  );
};

export default EditPostIcon;
