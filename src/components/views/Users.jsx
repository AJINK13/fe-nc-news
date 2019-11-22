import React from "react"
import * as api from "../../api.js"
import UserCard from "../cards/UserCard.jsx"
import ErrorPage from "./ErrorPage.jsx"

class Users extends React.Component {
  state = {
    users: [],
    isLoading: true,
    error: null
  }

  render() {
    const { users, isLoading, error } = this.state

    if (error) return <ErrorPage error={error} />
    if (isLoading) return <p>Loading...</p>

    return (
      <main>
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
    api
      .getUsers()
      .then(users => {
        this.setState({ users, isLoading: false })
      })
      .catch(err => {
        this.setState({
          error: {
            status: err.response.status,
            message: err.response.data.msg
          },
          isLoading: false
        })
      })
  }
}

export default Users
