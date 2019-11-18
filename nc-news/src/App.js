import React from "react"
import "./App.css"
import { Router } from "@reach/router"
import Header from "./components/Header.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Homepage />
        <Users />
        <Articles />
        <Topics />
      </Router>
    </div>
  )
}

export default App
