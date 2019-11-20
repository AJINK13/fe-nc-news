import React from "react"
import HomepageButton from "./buttons/HomepageButton"
import ArticlesButton from "./buttons/ArticlesButton"
import TopicsButton from "./buttons/TopicsButton"
import UsersButton from "./buttons/UsersButton"

const LinkButtons = () => {
  return (
    <main>
      <HomepageButton />
      <ArticlesButton />
      <TopicsButton />
      <UsersButton />
    </main>
  )
}

export default LinkButtons
