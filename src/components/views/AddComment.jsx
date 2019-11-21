import React from "react"

class AddComment extends React.Component {
  state = {
    body: ""
  }

  render() {
    const { body } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <button variant="primary" type="submit" disabled={body.length === 0}>
          Submit
        </button>
      </form>
    )
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    const { body } = this.state
    const { loggedInUser, addCommentByArticleID } = this.props
    event.preventDefault()
    addCommentByArticleID(body, loggedInUser)
    this.setState({ body: "" })
  }
}

export default AddComment
