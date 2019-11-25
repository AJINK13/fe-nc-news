import React from "react"
import * as api from "../../api.js"
import ArticleCardByUser from "../cards/ArticleCardByUser.jsx"
import SortArticles from "../views/SortArticles.jsx"
import ErrorPage from "./ErrorPage.jsx"

class ArticlesByUser extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    error: null
  }

  render() {
    const { articles, isLoading, error } = this.state

    if (error) return <ErrorPage error={error} />
    if (isLoading) return <p>Loading...</p>

    return (
      <main>
        <h2>Articles</h2>
        <SortArticles fetchArticles={this.fetchArticles} />
        <ul>
          {articles.filter(article => {
              console.log(article)
            return <ArticleCardByUser article={article} key={article.article_id} />
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
    api
      .getArticles(topic, sort_by, order)
      .then(articles => {
        this.setState({ articles, isLoading: false })
      })
      .catch(err => {
        this.setState({
          error: {
            status: err.response.status,
            message: err.response.data.Message
          },
          isLoading: false
        })
      })
  }
}

export default ArticlesByUser