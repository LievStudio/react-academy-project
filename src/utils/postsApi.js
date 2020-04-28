import { handleError, handleResponse } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/posts/";
const axios = require("axios");

export async function getPosts() {
  try {
    const response = await axios.get(baseUrl);
    return response;
  } catch (error) {
    handleError(error);
  }
}

export async function getPostById(id) {
  try {
    const response = await axios.get(`${baseUrl}${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function createPost(post) {
  console.log(post);
  try {
    const response = await axios.post(baseUrl, { ...post });
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function addComments(comments) {
  try {
  } catch (error) {
    handleResponse(error);
  }
}

export async function deletePost(id) {
  try {
    const response = await axios.delete(`${baseUrl}${id}`);
    console.log(response);
  } catch (error) {
    handleError(error);
  }
}

export async function editPost(post) {
  try {
    const response = await axios.put(`${baseUrl}${post.id}`, { ...post });
    console.log(response);
  } catch (error) {
    handleError(error);
  }
}
