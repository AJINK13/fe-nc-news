import React from "react"
import { Link } from "@reach/router"
import Button from "@material-ui/core/Button"

function UsersButton() {
  return (
    <nav>
      <Link to="/users">
        <Button variant="contained">Users</Button>
      </Link>
    </nav>
  )
}

export default UsersButton
