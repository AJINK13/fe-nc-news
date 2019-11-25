import React from "react"
import { Link } from "@reach/router"
import Button from "@material-ui/core/Button"

function ArticlesButton() {
  return (
    <nav>
      <Link to="/articles">
        <Button>Articles</Button>
      </Link>
    </nav>
  )
}

export default ArticlesButton
