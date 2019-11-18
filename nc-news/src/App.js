import React from "react"
import "./App.css"
import Header from "./components/Header.jsx"

class App extends React.component {
  state = {}
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App
