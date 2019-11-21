import React from "react"
import * as api from "../../api.js"
import SingleArticleCommentCard from "../cards/SingleArticleCommentCard.jsx"
import CreateNewComment from "./CreateNewComment.jsx"

class SingleArticleComments extends React.Component {
  state = {
    comments: [],
    isLoading: true
  }

  render() {
    const { comments, isLoading } = this.state
    const { user } = this.props
    console.log(user)
    if (isLoading) return <p>Loading...</p>
    return (
      <main>
        <CreateNewComment />
        <h2>Article Comments</h2>
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
}

export default SingleArticleComments
