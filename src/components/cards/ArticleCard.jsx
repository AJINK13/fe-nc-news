import React from "react"
import { Link } from "@reach/router"
const moment = require("moment")

const ArticleCard = props => {
  const { title, author, topic, created_at, votes, article_id } = props.article
  console.log(props)

  return (
    <main>
      <Link to={`/articles/${article_id}`}>
        <h2>{title}</h2>
      </Link>
      <h3>Topic: {topic}</h3>
      <h3>Author: {author}</h3>
      <h5>Votes: {votes}</h5>
      <h5>
        Date Created:{" "}
        {moment(created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </h5>
    </main>
  )
}

export default ArticleCard
