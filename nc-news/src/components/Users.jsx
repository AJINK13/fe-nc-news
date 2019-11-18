import React from "react"
import * as api from "../api.js"

class Users extends React.Component {
  state = {
    users: [],
    isLoading: true
  }

  render() {
    const { users, isLoading } = this.state
    return <div>Inside Users</div>
  }

  componentDidMount() {
    api.getUsers().then(users => {
      this.setState({ users, isLoading: false })
    })
  }
}

export default Users
