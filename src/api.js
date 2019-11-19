import axios from "axios"

const baseURL = "https://news-website-aj.herokuapp.com/api"

export const getUsers = () => {
  return axios.get(`${baseURL}/users`).then(res => {
    return res.data.users
  })
}

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(res => {
    return res.data.topics
  })
}

export const getArticles = () => {
  return axios.get(`${baseURL}/articles`).then(res => {
    return res.data.articles
  })
}
