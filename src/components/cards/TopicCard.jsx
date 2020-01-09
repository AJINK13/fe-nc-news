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
      <div>
        <Link to={`/topics/${topic.slug}`}>
          <h3>
            {topic.slug.charAt(0).toUpperCase() + topic.slug.substring(1)}
          </h3>
        </Link>
      </div>
    )
  }
}

export default TopicCard
