import React from "react"

class CreateNewComment extends React.Component {
  state = {
    body: ""
  }

  render() {
    console.log(this.props)
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
    const { loggedInUser, postComment } = this.props
    event.preventDefault()
    postComment(body, loggedInUser)
    this.setState({ body: "" })
  }
}

export default CreateNewComment
