import axios from "axios"

export const getUsers = () => {
  return axios
    .get("https://news-website-aj.herokuapp.com/api/users")
    .then(res => {
      return res.data.users
    })
}

export const getTopics = () => {
  return axios
    .get("https://news-website-aj.herokuapp.com/api/topics")
    .then(res => {
      return res.data.topics
    })
}

export const getArticles = () => {
  return axios
    .get("https://news-website-aj.herokuapp.com/api/articles")
    .then(res => {
      return res.data.articles
    })
}
