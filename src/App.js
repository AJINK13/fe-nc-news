import React from "react"
import "./App.css"
import { Router } from "@reach/router"
import Header from "./components/Header.jsx"
import TimeDisplay from "./components/TimeDisplay.jsx"
import Homepage from "./components/views/Homepage.jsx"
import Articles from "./components/views/Articles.jsx"
import Topics from "./components/views/Topics.jsx"
import Users from "./components/views/Users.jsx"
import SingleArticle from "./components/views/SingleArticle.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <TimeDisplay />
      <Router>
        <Homepage path="/" />
        <Articles path="/articles" />
        <Topics path="/topics" />
        <Users path="/users" />
        <SingleArticle path="/articles/:article_id" />
      </Router>
    </div>
  )
}

export default App
