import React from "react"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
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
          <InputLabel>Sort By</InputLabel>
          <Select name="sort_by" onChange={this.handleChange}>
            <MenuItem value="created_at">Date Created</MenuItem>
            <MenuItem value="comment_count">Comments</MenuItem>
            <MenuItem value="votes">Votes</MenuItem>
          </Select>
          <InputLabel> Order</InputLabel>
          <Select name="order" onChange={this.handleChange}>
            <MenuItem value="desc">Descending</MenuItem>
            <MenuItem value="asc">Ascending</MenuItem>
          </Select>
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
