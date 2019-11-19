import React from "react"
import * as api from "../api.js"
import HomepageButton from "./buttons/HomepageButton.jsx"
import TopicsButton from "./buttons/TopicsButton.jsx"
import UsersButton from "./buttons/UsersButton.jsx"

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true
  }

  render() {
    const { articles, isLoading } = this.state
    if (isLoading) return <p>Loading...</p>
    return (
      <main>
        <HomepageButton />
        <TopicsButton />
        <UsersButton />
        <ul>
          {articles.map(article => {
            return <li>{article.title}</li>
          })}
        </ul>
      </main>
    )
  }

  componentDidMount() {
    this.fetchArticles()
  }

  fetchArticles = () => {
    api.getArticles().then(articles => {
      this.setState({ articles, isLoading: false })
    })
  }
}

export default Articles
