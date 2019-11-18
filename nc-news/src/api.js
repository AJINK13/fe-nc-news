import axios from "axios"

export const getUsers = () => {
  return axios
    .get("https://news-website-aj.herokuapp.com/api/users")
    .then(res => {
      return res.data.users
    })
}
