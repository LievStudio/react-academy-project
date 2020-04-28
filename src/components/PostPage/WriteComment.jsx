import React from "react";
import { TextField, Button } from "@material-ui/core";
import "./styles/postPage.css";

const WriteComment = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <TextField
        required
        label="Type user"
        name="author"
        value={props.newComments.author}
        onChange={props.onChange}
        className="field-half-width"
      />
      <TextField
        multiline
        required
        name="content"
        label="Write a comment"
        value={props.newComments.content}
        onChange={props.onChange}
        className="field-full-width"
        fullWidth
      />
      <Button
        color="primary"
        variant="contained"
        className="form-btn-submit"
        style={{ marginTop: "20px" }}
        type="submit"
      >
        Add
      </Button>
    </form>
  );
};

export default WriteComment;
