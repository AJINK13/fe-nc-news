import React from "react"
import Button from "@material-ui/core/Button"
import SortIcon from "@material-ui/icons/Sort"

class SortArticles extends React.Component {
  state = {
    sort_by: "created_at",
    order: "desc"
  }

  render() {
    return (
      <div>
        <form onSubmit={this.HandleSubmit}>
          <label>Sort By</label>
          <select name="sort_by" onChange={this.handleChange}>
            <option value="created_at">Date Created</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
          <label> Order</label>
          <select name="order" onChange={this.handleChange}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </form>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<SortIcon />}
          onClick={this.handleSubmit}
        >
          Sort
        </Button>
      </div>
    )
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { fetchArticles } = this.props
    const { sort_by, order } = this.state
    fetchArticles(sort_by, order)
  }
}

export default SortArticles
