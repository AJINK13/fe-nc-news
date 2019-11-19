import React from "react"
import "./App.css"
import { Router } from "@reach/router"
import Header from "./components/Header.jsx"
import Homepage from "./components/buttons/HomepageButton.jsx"
import Articles from "./components/cards/ArticleCard.jsx"
import Topics from "./components/cards/TopicCard.jsx"
import Users from "./components/cards/UserCard.jsx"

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
      </Router>
    </div>
  )
}

export default App
