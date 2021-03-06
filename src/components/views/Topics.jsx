import React from "react"
import { Router } from "@reach/router"
import * as api from "../../api.js"
import TopicCard from "../cards/TopicCard.jsx"
import Articles from "../views/Articles.jsx"
import ErrorPage from "./ErrorPage.jsx"
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty"

class Topics extends React.Component {
  state = {
    topics: [],
    isLoading: true,
    error: null
  }

  render() {
    const { topics, isLoading, error } = this.state

    if (error) return <ErrorPage error={error} />
    if (isLoading)
      return (
        <p>
          <HourglassEmptyIcon />
        </p>
      )

    return (
      <div className="topics">
        <ul className="topics-links">
          {topics.map(topic => {
            return <TopicCard topic={topic} key={topic.description} />
          })}
        </ul >
        <Router>
          <Articles path="/:topic" />
        </Router>
      </div>
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
            message: err.response.data.Message
          },
          isLoading: false
        })
      })
  }
}

export default Topics
