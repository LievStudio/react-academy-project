import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import * as postsApi from "../../utils/postsApi";
import BackButton from "./BackButton";
import "./styles/postPage.css";
import { Link } from "react-router-dom";
import WriteComment from "./WriteComment";

const PostPage = (props) => {
  const [post, setPost] = useState({});
  const [postComments, setPostComments] = useState([]);
  const [newComments, setNewComments] = useState({
    id: null,
    content: "",
    author: "",
  });

  useEffect(() => {
    const postId = props.match.params.id;
    const fetchData = async (id) => {
      const result = await postsApi.getPostById(id);
      setPost(result);
      setPostComments(Object.values(result.comments));
    };
    fetchData(postId);
  }, [props.match.params.id]);

  // const handleOnClick = () => props.history.push("/");

  const handleChange = ({ target }) => {
    setNewComments({
      ...newComments,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postsApi.addComments(newComments);
  };

  return (
    <div className="post-detail">
      <div
        className="hero-banner"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <Link to="/">
          <BackButton />
        </Link>
        <h1 className="title">{post.title}</h1>
      </div>
      <div className="body">
        <p className="description">{post.description}</p>
      </div>
      <div className="comments-container">
        <h2 className="comments-title">Comments</h2>
        {postComments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <WriteComment
        onSubmit={handleSubmit}
        onChange={handleChange}
        newComments={newComments}
      />
    </div>
  );
};

export default PostPage;
