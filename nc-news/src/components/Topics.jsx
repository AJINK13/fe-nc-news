import React from "react"
import * as api from "../api.js"
import HomepageButton from "./buttons/HomepageButton"

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
        <HomepageButton />
        <ul>
          {topics.map(topic => {
            return <li>{topic.slug}</li>
          })}
        </ul>
      </main>
    )
  }

  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState({ topics, isLoading: false })
    })
  }
}

export default Topics
