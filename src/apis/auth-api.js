import axios from "../config/axios";

export const register = (input) => axios.post("/auth/register", input);
// # if have {} need return

export const login = (input) => axios.post("/auth/login", input);
// # input = {email and password}
// export const getMe = () => axios.get("/auth/me");
