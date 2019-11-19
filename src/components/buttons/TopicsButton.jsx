import React from "react"
import { Link } from "@reach/router"

function TopicsButton() {
  return (
    <nav>
      <Link to="/topics">
        <button>Topics</button>
      </Link>
    </nav>
  )
}

export default TopicsButton