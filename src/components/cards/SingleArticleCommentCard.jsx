import React from "react"
import RemoveComment from "../views/RemoveComment.jsx"
import VoteUpdater from "../views/VoteUpdater.jsx"
const moment = require("moment")

const SingleArticleCommentCard = props => {
  const { author, body, created_at, votes, comment_id } = props.comment
  return (
    <div className="comment-card">
      <p>{body}</p>
      <h4>Author: {author}</h4>
      <VoteUpdater votes={votes} comment_id={comment_id} />
      <h5>
        Date Created:{" "}
        {moment(created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </h5>
      {props.loggedInUser === author ? (
        <RemoveComment
          removeCommentByCommentID={props.removeCommentByCommentID}
          comment_id={comment_id}
          loggedInUser={props.loggedInUser}
        />
      ) : null}
    </div>
  )
}

export default SingleArticleCommentCard
