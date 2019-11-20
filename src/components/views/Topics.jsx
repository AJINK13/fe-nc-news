import React from "react"
import * as api from "../../api.js"
import TopicCard from "../cards/TopicCard.jsx"

class Topics extends React.Component {
  state = {
    topics: [],
    isLoading: true
  }

  render() {
    const { topics, isLoading } = this.state
    if (isLoading) return <p>Loading...</p>
    return (
      <main>
        <h2>Topics</h2>
        <ul>
          {topics.map(topic => {
            return <TopicCard topic={topic} key={topic.description} />
          })}
        </ul>
      </main>
    )
  }

  componentDidMount() {
    this.fetchTopics()
  }

  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({ topics, isLoading: false })
    })
  }
}

export default Topics
