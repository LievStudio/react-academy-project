import React from "react";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import "./styles/EditButton.css";

const EditButton = (props) => {
  const fabStyle = {
    backgroundColor: "coral",
    position: "fixed",
    top: "138px",
    right: "20px",
    zIndex: "1",
  };

  const editIconStyle = {
    color: "white",
  };

  return (
    <div>
      <Fab onClick={props.handleOpen} style={fabStyle} aria-label="edit">
        <EditIcon style={editIconStyle} />
      </Fab>
    </div>
  );
};

export default EditButton;
