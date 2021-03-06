import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import * as postsApi from "../../utils/postsApi";
import BackButton from "./BackButton";
import "./styles/postPage.css";
import { Link } from "react-router-dom";
import WriteComment from "./WriteComment";

const PostPage = (props) => {
  const [post, setPost] = useState({
    id: "",
    title: "",
    shortDescription: "",
    description: "",
    category: "",
    image: "",
    comments: [],
  });
  const [postComments, setPostComments] = useState(post.comments);

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

  const addComment = (newComment) => {
    setPostComments([...postComments, newComment]);
    post.comments.push(newComment);
    setPost({ ...post });
    postsApi.editPost(post);
    // call to API to save comment in backend
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
      <WriteComment addComment={addComment} />
    </div>
  );
};

export default PostPage;
