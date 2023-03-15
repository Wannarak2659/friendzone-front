import axios from "../config/axios";

export const register = (input) => axios.post("/auth/register", input);
// # if have {} need return

export const login = (input) => axios.post("/auth/login", input);
// # input = {email and password}

export const getUser = () => axios.get("/auth/user");

export const updateProfile = (FormData) => axios.patch("/users", FormData);

export const createGroup = (FormData) => axios.post("/groups", FormData);

export const getGroupById = (groupId) => axios.get(`/groups/${groupId}`);

export const getAllGroup = () => axios.get("/groups");

export const editGroup = (groupId, formData) =>
  axios.patch(`/groups/${groupId}`, formData);

export const createPost = (data) => axios.post("/posts", data);

export const getAllPost = (groupId) => axios.get(`/posts/${groupId}`);

export const editPost = (postId, FormData) =>
  axios.patch(`/posts/${postId}`, FormData);

export const deletePost = (postId) => axios.delete(`/posts/${postId}`);
