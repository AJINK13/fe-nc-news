import React from "react"

class VoteUpdater extends React.Component {
  state = {
    voteChange: 0
  }

  render() {
    const { voteChange } = this.state
    const { votes } = this.props.data
    console.log(voteChange, votes)

    return (
      <>
        <h6>Votes: {votes + votesChange}</h6>
        <button
          onClick={() => this.updateVotes(1, article_id, comment_id)}
          disabled={votesChange === 1}
        ></button>
        <button
          onClick={() => this.updateVotes(-1, article_id, comment_id)}
          disabled={votesChange === -1}
        ></button>
      </>
    )
  }

  updateVotes = (changeVote, article_id, comment_id) => {
    this.setState(currentState => {
      return { votesChange: currentState.votesChange + voteDifference }
    })

    if (article_id) {
      return api.patchCommentVotes(changeVote, article_id)
    } else if (comment_id) {
      return api.patchArticleVotes(changeVote, comment_id)
    }
  }
}

export default VoteUpdater
