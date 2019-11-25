import React from "react"
import * as api from "../../api.js"
import Button from "@material-ui/core/Button"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"

class VoteUpdater extends React.Component {
  state = {
    voteChange: 0
  }

  render() {
    const { voteChange } = this.state
    const { votes, article_id, comment_id } = this.props

    return (
      <>
        <h6>Votes: {votes + voteChange}</h6>
        <Button
          variant="contained"
          startIcon={<ThumbUpIcon />}
          onClick={() => this.updateVotes(1, article_id, comment_id)}
          disabled={voteChange === 1}
        >
          {" "}
          LIKE{" "}
        </Button>
        <Button
          variant="contained"
          startIcon={<ThumbDownIcon />}
          onClick={() => this.updateVotes(-1, article_id, comment_id)}
          disabled={voteChange === -1}
        >
          {" "}
          DISLIKE{" "}
        </Button>
      </>
    )
  }

  updateVotes = (changeVote, article_id, comment_id) => {
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + changeVote }
    })

    if (article_id) {
      return api.patchArticleVoteByArticleID(changeVote, article_id)
    } else if (comment_id) {
      return api.patchCommentVoteByCommentID(changeVote, comment_id)
    }
  }
}

export default VoteUpdater
