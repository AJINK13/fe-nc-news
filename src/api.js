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

export const getArticles = (topic, sort_by, order) => {
  return axios
    .get(`${baseURL}/articles`, { params: { sort_by, order, topic } })
    .then(res => {
      return res.data.articles
    })
}

export const getArticle = article_id => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(res => {
    return res.data.article
  })
}

export const getCommentsByArticleID = article_id => {
  return axios.get(`${baseURL}/articles/${article_id}/comments`).then(res => {
    return res.data.comments
  })
}
