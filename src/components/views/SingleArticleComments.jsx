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
    console.log(loggedInUser)
    if (isLoading) return <p>Loading...</p>
    return (
      <main>
        <h2>Article Comments</h2>
        <AddComment
          addCommentByArticleID={addCommentByArticleID}
          loggedInUser={loggedInUser}
        />
        <ul>
          {comments.map(comment => {
            return (
              <SingleArticleCommentCard
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

  fetchCommentsByArticleID = () => {
    const { article_id } = this.props
    api.getCommentsByArticleID(article_id).then(comments => {
      this.setState({ comments, isLoading: false })
    })
  }

  addCommentByArticleID = (body, loggedInUser) => {
    const { article_id } = this.props
    api
      .postCommentByArticleID(article_id, { body, loggedInUser })
      .then(comment => {
        this.setState(({ comments }) => {
          return {
            comments: [...comments, comment]
          }
        })
      })
  }
}

export default SingleArticleComments
