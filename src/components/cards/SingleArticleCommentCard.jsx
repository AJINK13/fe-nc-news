import React from "react"
const moment = require("moment")

const SingleArticleCommentCard = props => {
  const { author, body, created_at, votes } = props.comment

  return (
    <main>
      <h3>Author: {author}</h3>
      <h4>{body}</h4>
      <h5>Votes: {votes}</h5>
      <h6>
        Date Created:{" "}
        {moment(created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </h6>
    </main>
  )
}

export default SingleArticleCommentCard
