import React from "react"
import "./App.css"
import { Router } from "@reach/router"
import Header from "./components/views/Header.jsx"
import TimeDisplay from "./components/views/TimeDisplay.jsx"
import LinkButtons from "./components/views/LinkButtons.jsx"
import Homepage from "./components/views/Homepage.jsx"
import Articles from "./components/views/Articles.jsx"
import Topics from "./components/views/Topics.jsx"
import Users from "./components/views/Users.jsx"
import SingleArticle from "./components/views/SingleArticle.jsx"
import SingleArticleComments from "./components/views/SingleArticleComments.jsx"
import AddComment from "./components/views/AddComment"
import RemoveComment from "./components/views/RemoveComment.jsx"

class App extends React.Component {
  state = {
    loggedInUser: "tickle122"
  }

  render() {
    const { loggedInUser } = this.state
    return (
      <div className="App">
        <Header />
        <TimeDisplay />
        <LinkButtons />
        <Router>
          <Homepage path="/" />
          <Articles path="/articles" />
          <Topics path="/topics/*" />
          <Users path="/users" />
          <SingleArticle path="/articles/:article_id" />
          <SingleArticleComments
            path="/articles/:article_id/comments"
            loggedInUser={loggedInUser}
          />
          <AddComment path="/articles/:article_id/comments" />
          <RemoveComment path="/articles/:article_id/comments" />
        </Router>
      </div>
    )
  }
}

export default App
