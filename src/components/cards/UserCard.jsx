import React from "react"
import ArticlesByUser from "../views/Articles.jsx"

const UserCard = props => {
  const { username } = props.user

  return (
    <main>
      <h3>Author: {username}</h3>
      <ArticlesByUser />
    </main>
  )
}

export default UserCard
