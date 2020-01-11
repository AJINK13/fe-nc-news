import React from "react"
import RemoveComment from "../views/RemoveComment.jsx"
import VoteUpdater from "../views/VoteUpdater.jsx"
const moment = require("moment")

const SingleArticleCommentCard = props => {
  const { author, body, created_at, votes, comment_id } = props.comment
  return (
    <div className="comment-card">
      {props.loggedInUser === author ? (
        <RemoveComment
          removeCommentByCommentID={props.removeCommentByCommentID}
          comment_id={comment_id}
          loggedInUser={props.loggedInUser}
        />
      ) : null}
      <h3>Author: {author}</h3>
      <h4>{body}</h4>
      <VoteUpdater votes={votes} comment_id={comment_id} />
      <h6>
        Date Created:{" "}
        {moment(created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </h6>
    </div>
  )
}

export default SingleArticleCommentCard
