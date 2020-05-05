import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./styles/postPage.css";

const WriteComment = (props) => {
  const [newComments, setNewComments] = useState({
    id: Math.floor(Math.random() * 100), //temmporary logic for id handling
    content: "",
    author: "",
  });

  const handleSave = (event) => {
    event.preventDefault();
    props.addComment(newComments);
    setNewComments({
      id: Math.floor(Math.random() * 100),
      content: "",
      author: "",
    });
  };

  const handleChange = ({ target }) => {
    setNewComments({
      ...newComments,
      [target.name]: target.value,
    });
  };

  return (
    <form onSubmit={handleSave}>
      <TextField
        required
        label="Type user"
        name="author"
        value={newComments.author}
        onChange={handleChange}
        className="field-half-width"
      />
      <TextField
        multiline
        required
        name="content"
        label="Write a comment"
        value={newComments.content}
        onChange={handleChange}
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
