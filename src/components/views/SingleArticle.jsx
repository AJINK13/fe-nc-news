import React from "react"
import * as api from "../../api.js"
import { Link } from "@reach/router"
const moment = require("moment")

class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true
  }

  render() {
    const { article, isLoading } = this.state
    if (isLoading) return <p>Loading...</p>
    return (
      <main>
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
        <nav>
          <Link to={`/articles/${article.article_id}/comments`}>
            <h6>Comments: {article.comment_count}</h6>
          </Link>
        </nav>
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
