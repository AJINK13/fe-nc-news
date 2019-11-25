import React from "react"
import Button from "@material-ui/core/Button"
import PublishIcon from "@material-ui/icons/Publish"

class AddComment extends React.Component {
  state = {
    body: ""
  }

  render() {
    const { body } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Comment</label>
        <input onChange={this.handleChange} type="text" name="body"></input>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<PublishIcon />}
          disabled={body.length === 0}
        >
          Submit
        </Button>
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
