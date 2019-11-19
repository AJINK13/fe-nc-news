import React from "react"
import { Link } from "@reach/router"
const moment = require("moment")

const ArticleCard = props => {
  const { title, author, topic, created_at, votes, article_id } = props.article

  return (
    <main>
      <nav>
        <Link to={`/articles/${article_id}`}>
          <h2>{title}</h2>
        </Link>
      </nav>
      <h3>Topic: {topic}</h3>
      <h3>Author: {author}</h3>
      <h4>Votes: {votes}</h4>
      <h5>
        Date Created:{" "}
        {moment(created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </h5>
    </main>
  )
}

export default ArticleCard
