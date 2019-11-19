import React from "react"
import * as api from "../api.js"
import HomepageButton from "./buttons/HomepageButton.jsx"
import ArticlesButton from "./buttons/ArticlesButton.jsx"
import UsersButton from "./buttons/UsersButton.jsx"
import UserCard from "./cards/UserCard.jsx"

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
        <ArticlesButton />
        <UsersButton />
        <h2>Users</h2>
        <ul>
          {users.map(user => {
            return <UserCard user={user} key={user.username} />
          })}
        </ul>
      </main>
    )
  }

  componentDidMount() {
    this.fetchUsers()
  }

  fetchUsers = () => {
    api.getUsers().then(users => {
      this.setState({ users, isLoading: false })
    })
  }
}

export default Users
