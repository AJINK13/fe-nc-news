import React from "react"
import * as api from "../../api.js"

class SingleArticleComments extends React.Component {
  state = {
    comments: [],
    isLoading: true
  }

  render() {
    const { comments, isLoading } = this.state
    if (isLoading) return <p>Loading...</p>
    console.log(comments)
    return (
      <main>
        <h2>Article Comments</h2>
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
