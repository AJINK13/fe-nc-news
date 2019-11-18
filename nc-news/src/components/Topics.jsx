import React from "react"
import * as api from "../api.js"

class Topics extends React.Component {
  state = {
    topics: [],
    isLoading: true
  }

  render() {
    const { topics, isLoading } = this.state
    if (isLoading) return <p>Loading...</p>
    return (
      <ul>
        {topics.map(topic => {
          return <li>{topic.slug}</li>
        })}
      </ul>
    )
  }

  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState({ topics, isLoading: false })
    })
  }
}

export default Topics
