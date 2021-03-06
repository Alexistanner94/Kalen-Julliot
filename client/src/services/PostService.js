import axios from "axios"

export const PostRegistration = (data) => {
  return axios.post("/api/poster", data).then((res) => res.status)
}

export const PhoneValidation = (data) =>
  axios.post("/api/validatePhone", data).then((exist) => exist.status)
