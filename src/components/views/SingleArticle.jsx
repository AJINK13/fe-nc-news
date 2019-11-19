import React from "react"
import * as api from "../../api.js"
import HomepageButton from "../buttons/HomepageButton.jsx"
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
    return (
      <main>
        <HomepageButton />
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
    api.getArticle().then(article => {
      this.setState({ article, isLoading: false })
    })
  }
}

export default SingleArticle
