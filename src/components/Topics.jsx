import React from "react"
import * as api from "../api.js"
import HomepageButton from "./buttons/HomepageButton.jsx"
import ArticlesButton from "./buttons/ArticlesButton.jsx"
import UsersButton from "./buttons/UsersButton.jsx"

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
        <ArticlesButton />
        <UsersButton />
        <ul>
          {topics.map(topic => {
            return <li>{topic.slug}</li>
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
