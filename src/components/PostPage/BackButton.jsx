import React from "react";
import { Fab, Icon } from "@material-ui/core/";
import "./styles/postPage.css";

const BackButton = () => {
  return (
    <>
      <Fab className="fab-back-icon" aria-label="back">
        <Icon className="back-icon">&laquo;</Icon>
      </Fab>
    </>
  );
};

export default BackButton;
