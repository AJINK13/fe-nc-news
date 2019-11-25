import React from "react"
import { Link } from "@reach/router"
import Button from "@material-ui/core/Button"

function TopicsButton() {
  return (
    <nav>
      <Link to="/topics">
        <Button>Topics</Button>
      </Link>
    </nav>
  )
}

export default TopicsButton