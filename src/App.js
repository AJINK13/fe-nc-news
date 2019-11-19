import React from "react"
import "./App.css"
import { Router } from "@reach/router"
import Header from "./components/Header.jsx"
import TimeDisplay from "./components/TimeDisplay.jsx"
import Homepage from  "./components/pages/Homepage.jsx"
import Articles from "./components/pages/Articles.jsx"
import Topics from "./components/pages/Topics.jsx"
import Users from "./components/pages/Users.jsx"

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
