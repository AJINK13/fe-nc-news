import React from "react"
import { Link } from "@reach/router"

function UsersButton() {
  return (
    <nav>
      <Link to="/users">
        <button>Users</button>
      </Link>
    </nav>
  )
}

export default UsersButton