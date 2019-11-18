import React from "react"
import * as api from "../api.js"

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true
  }

  render() {
    const { articles, isLoading } = this.state
    if (isLoading) return <p>Loading...</p>
    return (
      <ul>
        {articles.map(article => {
          return <li>{article.title}</li>
        })}
      </ul>
    )
  }

  componentDidMount() {
    api.getArticles().then(articles => {
      this.setState({ articles, isLoading: false })
    })
  }
}

export default Articles
