import React from "react"

const RemoveComment = props => {
  const { removeCommentByCommentID, comment_id } = props
  return (
    <button
      onClick={() => {
        removeCommentByCommentID(comment_id)
      }}
    >DELETE COMMENT</button>
  )
}

export default RemoveComment
