import React from "react"
import { Link } from "@reach/router"
import Button from "@material-ui/core/Button"

function HomepageButton() {
  return (
    <nav>
      <Link to="/">
        <Button>Homepage</Button>
      </Link>
    </nav>
  )
}

export default HomepageButton
