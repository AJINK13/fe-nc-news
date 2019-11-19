import React from "react"
import * as api from "../../api.js"
import HomepageButton from "../buttons/HomepageButton.jsx"
import ArticlesButton from "../buttons/ArticlesButton.jsx"
import TopicsButton from "../buttons/TopicsButton.jsx"
import UsersButton from "../buttons/UsersButton.jsx"
const moment = require("moment")

class SingleArticle extends React.Component {
  state = {
    article: [],
    isLoading: true
  }

  render() {
    const { article, isLoading } = this.state
    if (isLoading) return <p>Loading...</p>
    console.log(article)
    return (
      <main>
        <HomepageButton />
        <ArticlesButton />
        <TopicsButton />
        <UsersButton />
        <h2>Article</h2>
        <h3>{article.title}</h3>
        <h4>Topic: {article.topic}</h4>
        <h4>{article.body}</h4>
        <h5>Author: {article.author}</h5>
        <h6>Votes: {article.votes}</h6>
        <h6>
          Date Created:{" "}
          {moment(article.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </h6>
        <h6>Comments: {article.comment_count}</h6>
      </main>
    )
  }

  componentDidMount() {
    this.fetchArticle()
  }

  fetchArticle = () => {
    const { article_id } = this.props
    api.getArticle(article_id).then(article => {
      this.setState({ article, isLoading: false })
    })
  }
}

export default SingleArticle
