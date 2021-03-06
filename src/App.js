import React from "react"
import "./App.css"
import { Router } from "@reach/router"
import NavBar from "./components/views/NavBar.jsx"
import Homepage from "./components/views/Homepage.jsx"
import Articles from "./components/views/Articles.jsx"
import Topics from "./components/views/Topics.jsx"
import SingleArticle from "./components/views/SingleArticle.jsx"
import ErrorPage from "./components/views/ErrorPage"

class App extends React.Component {
  state = {
    loggedInUser: "tickle122"
  }

  render() {
    const { loggedInUser } = this.state
    return (
      <div className="App">
        <NavBar />
        <Router>
          <Homepage path="/" />
          <Articles path="/articles" />
          <Topics path="/topics/*" />
          <SingleArticle
            path="/articles/:article_id/*"
            loggedInUser={loggedInUser}
          />
          <ErrorPage
            error={{ status: 404, message: "Page Not Found" }}
            default
          />
        </Router>
      </div>
    )
  }
}

export default App
