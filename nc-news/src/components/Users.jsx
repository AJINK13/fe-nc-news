import React from "react"
import * as api from "../api.js"

class Users extends React.Component {
  state = {
    users: {},
    isLoading: true
  }

  render() {
    return <div>Inside Users</div>
  }

  componentDidMount() {
    api.getUsers().then(res => {
      console.log(res)
    })
  }
}

export default Users
