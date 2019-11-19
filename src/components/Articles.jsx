import React from "react"
import * as api from "../api.js"
import HomepageButton from "./buttons/HomepageButton.jsx"
import TopicsButton from "./buttons/TopicsButton.jsx"
import UsersButton from "./buttons/UsersButton.jsx"
import ArticleCard from "./cards/ArticleCard.jsx"

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true
  }

  render() {
    const { isLoading } = this.state
    if (isLoading) return <p>Loading...</p>
    return (
      <main>
        <HomepageButton />
        <TopicsButton />
        <UsersButton />
        <h2>Articles</h2>
        <ul>
          {this.state.articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />
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
