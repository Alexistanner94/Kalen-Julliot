import axios from "axios";

const LoginService = data =>
  axios.post("/api/login", data).then(res => res.status);

export default LoginService;
