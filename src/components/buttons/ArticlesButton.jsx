import React from "react"
import { Link } from "@reach/router"
import Button from "@material-ui/core/Button"
import DescriptionIcon from "@material-ui/icons/Description"

function ArticlesButton() {
  return (
    <nav>
      <Link to="/articles">
        <Button variant="contained" startIcon={<DescriptionIcon />}>
          Articles
        </Button>
      </Link>
    </nav>
  )
}

export default ArticlesButton
