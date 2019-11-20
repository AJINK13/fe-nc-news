import React from "react"
import { Link } from "@reach/router"

class TopicCard extends React.Component {
  state = {
    articles: [],
    isLoading: true
  }

  render() {
    const { topic } = this.props
    return (
      <main>
        <Link to={`/topics/${topic.slug}`}>
          <h3>{topic.slug}</h3>
        </Link>
      </main>
    )
  }
}

export default TopicCard
