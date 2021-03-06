import React from "react"
import * as api from "../../api.js"
import SingleArticleCommentCard from "../cards/SingleArticleCommentCard.jsx"
import AddComment from "./AddComment.jsx"
import ErrorPage from "./ErrorPage.jsx"
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty"

class SingleArticleComments extends React.Component {
  state = {
    comments: [],
    isLoading: true,
    error: null
  }

  render() {
    const { comments, isLoading, error } = this.state
    const { loggedInUser } = this.props

    if (error) return <ErrorPage error={error} />
    if (isLoading)
      return (
        <p>
          <HourglassEmptyIcon />
        </p>
      )

    return (
      <div className="single-article-comments">
        <h2>Article Comments</h2>
        <AddComment
          addCommentByArticleID={this.addCommentByArticleID}
          loggedInUser={loggedInUser}
        />
        <ul className="article-comments-ul">
          {comments.map(comment => {
            return (
              <SingleArticleCommentCard
                removeCommentByCommentID={this.removeCommentByCommentID}
                loggedInUser={loggedInUser}
                comment={comment}
                key={comment.comment_id}
              />
            )
          })}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.fetchCommentsByArticleID()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.comments.length !== prevState.comments.length) {
      this.fetchCommentsByArticleID()
    }
  }

  fetchCommentsByArticleID = () => {
    const { article_id } = this.props
    api
      .getCommentsByArticleID(article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false })
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

  addCommentByArticleID = (body, loggedInUser) => {
    const { article_id } = this.props
    api
      .postCommentByArticleID(article_id, { body, username: loggedInUser })
      .then(comment => {
        this.setState(({ comments }) => {
          return {
            comments: [comment, ...comments]
          }
        })
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

  removeCommentByCommentID = comment_id => {
    api.deleteCommentByCommentID(comment_id).then(() => {
      this.setState(curentState => {
        const newCommentsList = curentState.comments.filter(comment => {
          return comment_id !== comment.comment_id
        })
        return { comments: newCommentsList }
      })
    })
  }
}

export default SingleArticleComments
