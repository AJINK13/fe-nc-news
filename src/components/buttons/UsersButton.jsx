import React from "react"
import { Link } from "@reach/router"
import Button from "@material-ui/core/Button"
import PeopleIcon from "@material-ui/icons/People"

function UsersButton() {
  return (
    <nav>
      <Link to="/users">
        <Button variant="contained" startIcon={<PeopleIcon />}>
          Users
        </Button>
      </Link>
    </nav>
  )
}

export default UsersButton
