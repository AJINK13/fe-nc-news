import React from "react"
import * as api from "../api.js"

class Users extends React.Component {
  state = {
    users: [],
    isLoading: true
  }

  render() {
    const { users, isLoading } = this.state
    if (isLoading) return <p>Loading...</p>
    return (
      <ul>
        {users.map(user => {
          return <li>{user.username}</li>
        })}
      </ul>
    )
  }
  componentDidMount() {
    api.getUsers().then(users => {
      this.setState({ users, isLoading: false })
    })
  }
}

export default Users
