import React from "react"
import * as api from "../../api.js"
import { Router, Link } from "@reach/router"
import VoteUpdater from "../views/VoteUpdater.jsx"
import SingleArticleComments from "./SingleArticleComments.jsx"
import ErrorPage from "./ErrorPage.jsx"
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty"
const moment = require("moment")

class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true,
    error: null
  }

  render() {
    const { article, isLoading, error } = this.state
    const { loggedInUser } = this.props

    if (error) return <ErrorPage error={error} />
    if (isLoading)
      return (
        <p>
          <HourglassEmptyIcon />
        </p>
      )

    return (
      <div className="single-article">
        <h2>{article.title}</h2>
        <h3>
          Topic:{" "}
          {article.topic.charAt(0).toUpperCase() + article.topic.substring(1)}
        </h3>
        <p>{article.body}</p>
        <h4>Author: {article.author}</h4>
        <VoteUpdater votes={article.votes} article_id={article.article_id} />
        <h5>
          Date Created:{" "}
          {moment(article.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </h5>
        <nav>
          <Link
            to={`/articles/${article.article_id}/${
              this.props["*"] !== "comments" ? "comments" : ""
            }`}
          >
            <h6>Comments: {article.comment_count}</h6>
          </Link>
        </nav>
        <Router>
          <SingleArticleComments path="/comments" loggedInUser={loggedInUser} />
        </Router>
      </div>
    )
  }

  componentDidMount() {
    this.fetchArticle()
  }

  fetchArticle = () => {
    const { article_id } = this.props
    api
      .getArticleByArticleID(article_id)
      .then(article => {
        this.setState({ article, isLoading: false })
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

export default SingleArticle
