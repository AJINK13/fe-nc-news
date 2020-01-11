import React from "react"
import * as api from "../../api.js"
import ArticleCard from "../cards/ArticleCard.jsx"
import SortArticles from "../views/SortArticles.jsx"
import ErrorPage from "./ErrorPage.jsx"
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty"

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    error: null
  }

  render() {
    const { articles, isLoading, error } = this.state

    if (error) return <ErrorPage error={error} />
    if (isLoading)
      return (
        <p>
          <HourglassEmptyIcon />
        </p>
      )

    return (
      <div className="articles">
        <h2>Articles</h2>
        <div className="articles-dropdowns">
          <SortArticles fetchArticles={this.fetchArticles} />
        </div>
        <ul className="articles-ul">
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />
          })}
        </ul>
      </div>
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

export default Articles
