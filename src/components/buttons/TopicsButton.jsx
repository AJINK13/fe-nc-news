import React from "react"
import { Link } from "@reach/router"
import Button from "@material-ui/core/Button"
import AssignmentIcon from "@material-ui/icons/Assignment"

function TopicsButton() {
  return (
    <nav>
      <Link to="/topics">
        <Button variant="contained" startIcon={<AssignmentIcon />}>
          Topics
        </Button>
      </Link>
    </nav>
  )
}

export default TopicsButton
