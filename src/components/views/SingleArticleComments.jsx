import React from "react"

class SingleArticleComments extends React.Component {
  state = {
    comments: [],
    isLoading: true
  }

  render() {
    const { comments, isLoading } = this.state
    if (isLoading) return <p>Loading...</p>
    return (
      <main>
      </main>
    )
  }
}

export default SingleArticleComments
