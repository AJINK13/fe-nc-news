import React from "react"
import { Router } from "@reach/router"
import * as api from "../../api.js"
import TopicCard from "../cards/TopicCard.jsx"
import Articles from "../views/Articles.jsx"
import ErrorPage from "./ErrorPage.jsx"

class Topics extends React.Component {
  state = {
    topics: [],
    isLoading: true,
    error: null
  }

  render() {
    const { topics, isLoading, error } = this.state

    if (error) return <ErrorPage error={error} />
    if (isLoading) return <p>Loading...</p>

    return (
      <main>
        <h2>Topics</h2>
        <ul>
          {topics.map(topic => {
            return <TopicCard topic={topic} key={topic.description} />
          })}
        </ul>
        <Router>
          <Articles path="/:topic" />
        </Router>
      </main>
    )
  }

  componentDidMount() {
    this.fetchTopics()
  }

  fetchTopics = () => {
    api
      .getTopics()
      .then(topics => {
        this.setState({ topics, isLoading: false })
      })
      .catch(err => {
        this.setState({
          error: {
            status: err.response.status,
            message: err.response.data.msg
          },
          isLoading: false
        })
      })
  }
}

export default Topics
