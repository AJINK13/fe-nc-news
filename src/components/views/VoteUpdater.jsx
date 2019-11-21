import React from "react"
import * as api from "../../api.js"

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
        <button
          onClick={() => this.updateVotes(1, article_id, comment_id)}
          disabled={voteChange === 1}
        >
          {" "}
          LIKE{" "}
        </button>
        <button
          onClick={() => this.updateVotes(-1, article_id, comment_id)}
          disabled={voteChange === -1}
        >
          {" "}
          DISLIKE{" "}
        </button>
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
