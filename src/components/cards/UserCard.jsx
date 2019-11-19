import React from "react"

const UserCard = props => {
  const { username } = props.user

  return (
    <main>
      <h2>{username}</h2>
    </main>
  )
}

export default UserCard
