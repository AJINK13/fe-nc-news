import React from "react"
import "./App.css"
import { Router } from "@reach/router"
import Header from "./components/Header.jsx"
import Homepage from  "./components/Homepage.jsx"
import Users from "./components/Users.jsx"
import Articles from "./components/Articles.jsx"
import Topics from "./components/Topics.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Homepage path="/" />
        <Users path="/users" />
        <Articles path="/articles" />
        <Topics path="/topics" />
      </Router>
    </div>
  )
}

export default App
