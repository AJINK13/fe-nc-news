import React from "react"
import { Link } from "@reach/router"

function Homepage() {
  return (
    <nav>
      <Link to="/users">
        <button>Users</button>
      </Link>
      <Link to="/articles">
        <button>Articles</button>
      </Link>
      <Link to="/topics">
        <button>Topics</button>
      </Link>
    </nav>
  )
}

export default Homepage
