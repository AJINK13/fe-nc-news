import React from "react"
import { Link } from "@reach/router"
import Button from "@material-ui/core/Button"
import HomeIcon from "@material-ui/icons/Home"

function HomepageButton() {
  return (
    <nav>
      <Link to="/">
        <Button variant="contained" startIcon={<HomeIcon />}>
          Homepage
        </Button>
      </Link>
    </nav>
  )
}

export default HomepageButton
