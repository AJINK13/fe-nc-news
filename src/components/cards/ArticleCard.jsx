import React from "react"
import { Link } from "@reach/router"
import VoteUpdater from "../views/VoteUpdater.jsx"
const moment = require("moment")

const ArticleCard = props => {
  const { title, author, topic, created_at, votes, article_id } = props.article

  return (
    <main>
      <nav>
        <Link to={`/articles/${article_id}`}>
          <h3>{title}</h3>
        </Link>
      </nav>
      <h4>Topic: {topic}</h4>
      <h5>Author: {author}</h5>
      <h6>Votes: {votes}</h6>
      <VoteUpdater data={votes} />
      <h6>
        Date Created:{" "}
        {moment(created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </h6>
    </main>
  )
}

export default ArticleCard
