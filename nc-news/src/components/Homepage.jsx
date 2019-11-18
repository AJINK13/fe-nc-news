import React from "react"
import { Link } from "@reach/router"

function Homepage() {
  return (
    <nav>
      <Link to="/articles">
        <button>Articles</button>
      </Link>
      <Link to="/topics">
        <button>Topics</button>
      </Link>
      <Link to="/users">
        <button>Users</button>
      </Link>
    </nav>
  )
}

export default Homepage
