import React from "react"
import * as api from "../../api.js"
import HomepageButton from "../buttons/HomepageButton.jsx"
import ArticlesButton from "../buttons/ArticlesButton.jsx"
import TopicsButton from "../buttons/TopicsButton.jsx"
import UsersButton from "../buttons/UsersButton.jsx"

class SingleArticle extends React.Component {
  state = {
    article: [],
    isLoading: true
  }

  render() {
    const { article, isLoading } = this.state
    if (isLoading) return <p>Loading...</p>
    console.log(article)
    return (
      <main>
        <HomepageButton />
        <ArticlesButton />
        <TopicsButton />
        <UsersButton />
        <h2>Article</h2>
      </main>
    )
  }

  componentDidMount() {
    this.fetchArticle()
  }

  fetchArticle = () => {
    const { article_id } = this.props
    api.getArticle(article_id).then(article => {
      this.setState({ article, isLoading: false })
    })
  }
}

export default SingleArticle
