import React from "react"
import { Link } from "@reach/router"

function HomepageButton() {
  return (
    <nav>
      <Link to="/">
        <button>Homepage</button>
      </Link>
    </nav>
  )
}

export default HomepageButton
