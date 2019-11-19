import React from "react"

const UserCard = props => {
  const { username } = props.user

  return (
    <main>
      <h3>{username}</h3>
    </main>
  )
}

export default UserCard
