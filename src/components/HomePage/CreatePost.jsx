import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { NativeSelect, FormHelperText } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import "./styles/dialog.css";

const CreatePost = (props) => {
  const randomImage = Math.floor(Math.random() * 100);
  const [errors, setErrors] = useState({});
  const [_post, _setPost] = useState({
    id: randomImage,
    title: "",
    shortDescription: "",
    description: "",
    category: "",
    image: `https://source.unsplash.com/random?sig=${randomImage}`,
    comments: [],
  });

  function handleChange({ target }) {
    _setPost({
      ..._post,
      [target.name]: target.value,
    });
  }

  const handleClose = () => {
    props.onCancel();
    _setPost({
      id: randomImage,
      title: "",
      shortDescription: "",
      description: "",
      category: "",
      image: `https://source.unsplash.com/random?sig=${randomImage}`,
      comments: [],
    });
    setErrors({});
  };

  function formIsValid() {
    const _errors = {};

    if (!_post.title) _errors.title = "Title is required";
    if (!_post.shortDescription)
      _errors.shortDescription = "Short Description is required";
    if (!_post.description) _errors.description = "Description is required";
    if (!_post.category) _errors.category = "Category is required";
    if (!_post.image) _errors.image = "Image URL is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  const handleSave = (event) => {
    event.preventDefault();
    // console.log("before form validation");
    if (!formIsValid()) return;
    // console.log("after form validation");
    props.addPost(_post);
    props.onCancel();
    _setPost({
      id: randomImage,
      title: "",
      shortDescription: "",
      description: "",
      category: "",
      image: `https://source.unsplash.com/random?sig=${randomImage}`,
      comments: [],
    });
  };

  return (
    <>
      <Dialog
        open={props.state}
        onClose={handleClose}
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
        aria-labelledby="form-dialog-title"
        className="create-dialog"
      >
        <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
          Create Post
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSave} autoComplete="off">
            <TextField
              required
              id="title"
              label="Title"
              name="title"
              value={_post.title}
              onChange={handleChange}
              className="dialog-field"
              fullWidth
              autoFocus
              error={errors.title ? true : false}
            />
            {errors.title && <FormHelperText>{errors.title}</FormHelperText>}
            <TextField
              required
              id="short-description"
              label="Short Description"
              name="shortDescription"
              value={_post.shortDescription}
              onChange={handleChange}
              className="dialog-field"
              fullWidth
              multiline
              error={errors.shortDescription ? true : false}
            />
            {errors.shortDescription && (
              <FormHelperText>{errors.shortDescription}</FormHelperText>
            )}
            <TextField
              required
              id="description"
              label="Description"
              name="description"
              value={_post.description}
              onChange={handleChange}
              className="dialog-field"
              multiline
              fullWidth
              error={errors.description ? true : false}
            />
            {errors.description && (
              <FormHelperText>{errors.description}</FormHelperText>
            )}
            <FormControl fullWidth variant="outlined" id="category-dropdown">
              <InputLabel htmlFor="outlined-age-native-simple">
                Category
              </InputLabel>
              <NativeSelect
                value={_post.category}
                onChange={handleChange}
                label="Category"
                name="category"
                id="outlined-category-native-simple"
                className="dialog-field"
                error={errors.category ? true : false}
                required
              >
                <option aria-label="None" value="" />
                <option value="travel">Travel</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="business">Business</option>
                <option value="food">Food</option>
                <option value="work">Work</option>
              </NativeSelect>
            </FormControl>
            {errors.category && (
              <FormHelperText>{errors.category}</FormHelperText>
            )}
            <TextField
              required
              id="imageUrl"
              label="Image URL"
              name="image"
              value={_post.image}
              onChange={handleChange}
              className="dialog-field"
              fullWidth
              error={errors.image ? true : false}
            />
            {errors.image && <FormHelperText>{errors.image}</FormHelperText>}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreatePost;
