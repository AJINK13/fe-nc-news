import React from "react"
import * as api from "../../api.js"
import ArticleCard from "../cards/ArticleCard.jsx"

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true
  }

  render() {
    const { articles, isLoading } = this.state
    if (isLoading) return <p>Loading...</p>
    return (
      <main>
        <h2>Articles</h2>
        <ul>
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />
          })}
        </ul>
      </main>
    )
  }

  componentDidMount() {
    this.fetchArticles()
  }

  fetchArticles = () => {
    api.getArticles().then(articles => {
      this.setState({ articles, isLoading: false })
    })
  }
}

export default Articles
