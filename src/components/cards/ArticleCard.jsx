import React from "react"
import { Link } from "@reach/router"
import VoteUpdater from "../views/VoteUpdater.jsx"
const moment = require("moment")

const ArticleCard = props => {
  const { title, author, topic, created_at, votes, article_id } = props.article

  return (
    <div className="article-card">
      <nav>
        <Link to={`/articles/${article_id}`}>
          <h3>{title}</h3>
        </Link>
      </nav>
      <h4>Topic: {topic.charAt(0).toUpperCase() + topic.substring(1)}</h4>
      <h5>Author: {author}</h5>
      <VoteUpdater votes={votes} article_id={article_id} />
      <h6>
        Date Created:{" "}
        {moment(created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </h6>
    </div>
  )
}

export default ArticleCard
