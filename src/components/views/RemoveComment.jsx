import React from "react"
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/Delete"

const RemoveComment = props => {
  const { removeCommentByCommentID, comment_id } = props
  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<DeleteIcon />}
      onClick={() => {
        removeCommentByCommentID(comment_id)
      }}
    >
      DELETE
    </Button>
  )
}

export default RemoveComment
