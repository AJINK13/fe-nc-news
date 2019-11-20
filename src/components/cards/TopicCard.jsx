import React from "react"

class TopicCard extends React.Component {
  state = {
    articles: [],
    isLoading: true
  }

  render() {
    const { topic } = this.props
    return (
      <main>
        <h3>{topic.slug}</h3>
      </main>
    )
  }
}

export default TopicCard
