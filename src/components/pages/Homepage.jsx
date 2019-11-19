import React from "react"
import ArticlesButton from "../buttons/ArticlesButton.jsx"
import TopicsButton from "../buttons/TopicsButton.jsx"
import UsersButton from "../buttons/UsersButton.jsx"

function Homepage() {
  return (
    <main>
      <ArticlesButton />
      <TopicsButton />
      <UsersButton />
    </main>
  )
}

export default Homepage
