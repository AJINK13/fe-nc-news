import React from "react"
import * as api from "../../api.js"
import ArticleCard from "../cards/ArticleCard.jsx"
import SortArticles from "../views/SortArticles.jsx"

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
        <SortArticles fetchArticles={this.fetchArticles} />
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

  componentDidUpdate(prevProps, prevState) {
    if (this.props.topic !== prevProps.topic) this.fetchArticles()
  }

  fetchArticles = (sort_by, order) => {
    const { topic } = this.props
    api.getArticles(topic, sort_by, order).then(articles => {
      this.setState({ articles, isLoading: false })
    })
  }
}

export default Articles
