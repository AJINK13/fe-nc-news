import React from "react"
import { Link } from "@reach/router"

function ArticlesButton() {
  return (
    <nav>
      <Link to="/articles">
        <button>Articles</button>
      </Link>
    </nav>
  )
}

export default ArticlesButton
