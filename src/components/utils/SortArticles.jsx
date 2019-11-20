import React from "react"

class SortArticles extends React.Component {
  state = {
    sort_by: "created_at",
    order: "desc"
  }

  render() {
    return (
      <div>
        <form onSubmit={this.HandleSubmit}>
          <label>Sort By:</label>
          <select name="sort_by" onChange={this.handleChange}>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
          <label> Order:</label>
          <select name="order" onChange={this.handleChange}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </form>
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
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
