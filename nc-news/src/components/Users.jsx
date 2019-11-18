import React from "react"
import * as api from "../api.js"
import HomepageButton from "./buttons/HomepageButton.jsx"

class Users extends React.Component {
  state = {
    users: [],
    isLoading: true
  }

  render() {
    const { users, isLoading } = this.state
    if (isLoading) return <p>Loading...</p>
    return (
      <main>
        <HomepageButton />
        <ul>
          {users.map(user => {
            return <li>{user.username}</li>
          })}
        </ul>
      </main>
    )
  }

  componentDidMount() {
    api.getUsers().then(users => {
      this.setState({ users, isLoading: false })
    })
  }
}

export default Users
