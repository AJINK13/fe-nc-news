import React from "react"
import * as api from "../../api.js"
import SingleArticleCommentCard from "../cards/SingleArticleCommentCard.jsx"
import AddComment from "./AddComment.jsx"

class SingleArticleComments extends React.Component {
  state = {
    comments: [],
    isLoading: true
  }

  render() {
    const { comments, isLoading } = this.state
    const { loggedInUser } = this.props
    if (isLoading) return <p>Loading...</p>
    return (
      <main>
        <h2>Article Comments</h2>
        <AddComment
          addCommentByArticleID={this.addCommentByArticleID}
          loggedInUser={loggedInUser}
        />
        <ul>
          {comments.map(comment => {
            return (
              <SingleArticleCommentCard
              removeCommentByCommentID={this.removeCommentByCommentID}
                comment={comment}
                key={comment.comment_id}
              />
            )
          })}
        </ul>
      </main>
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
    api.getCommentsByArticleID(article_id).then(comments => {
      this.setState({ comments, isLoading: false })
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
