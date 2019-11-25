import React from "react"
import Articles from "../views/Articles.jsx"

const UserCard = props => {
  const { username } = props.user

  return (
    <main>
      <h3>Author: {username}</h3>
      <Articles />
    </main>
  )
}

export default UserCard
