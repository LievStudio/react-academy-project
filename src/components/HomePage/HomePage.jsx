import React, { useState, useEffect } from "react";
import EditButton from "./EditButton";
import Categories from "./Categories";
import PostList from "./PostList";
import * as postsApi from "../../utils/postsApi";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import "../../styles/App.css";

const HomePage = (props) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    id: "",
    title: "",
    shortDescription: "",
    description: "",
    category: "",
    image: "",
    comments: [],
  });
  const [category, setCategory] = useState("all");
  const [createIsOpen, setCreateIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  // const [formSaved, setFormSaved] = useState(false);

  const fetchPosts = async () => {
    const result = await postsApi.getPosts();
    setPosts(result.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    handleEditOpen();
  }, [post]);

  function changeCategory(category) {
    setCategory(category);
  }

  const handleCreateOpen = () => {
    setCreateIsOpen(true);
  };

  const handleCreateClose = () => {
    setCreateIsOpen(false);
  };

  const handleEditOpen = () => {
    setEditIsOpen(true);
  };

  const handleEditClose = () => {
    setEditIsOpen(false);
  };

  const fetchPost = (id) => {
    console.log(post);
    let postFetched = posts.find((_post) => _post.id === id);
    setPost(postFetched);
    // handleEditOpen();
  };

  const addPost = (receivedPost) => {
    postsApi.createPost(receivedPost);
    posts.push(receivedPost);
    setPosts(posts);
  };

  const editPost = (props) => {};

  const handleDelete = (id) => {
    let newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
    postsApi.deletePost(id);
  };

  return (
    <>
      <CreatePost
        state={createIsOpen}
        onCancel={handleCreateClose}
        addPost={addPost}
      />
      <EditPost
        state={editIsOpen}
        post={post}
        onCancel={handleEditClose}
        editPost={editPost}
      />
      <div className="container">
        <EditButton onClick={props.onClick} handleOpen={handleCreateOpen} />
        <Categories changeCategory={changeCategory} activeCategory={category} />
        <div className="posts-list">
          <PostList
            posts={posts}
            activeCategory={category}
            onDelete={handleDelete}
            handleOpen={handleEditOpen}
            fetchPost={fetchPost}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
