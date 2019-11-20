import React from "react"
import HomepageButton from "../buttons/HomepageButton"
import ArticlesButton from "../buttons/ArticlesButton"
import TopicsButton from "../buttons/TopicsButton"
import UsersButton from "../buttons/UsersButton"

class SingleArticleComments extends React.Component {
    state = {
        comments: [],
        isLoading: true
    }

    render() {
        const { comments, isLoading } = this.state
        if (isLoading) return <p>Loading...</p>
        return (
            <main>
                <HomepageButton />
                <ArticlesButton />
                <TopicsButton />
                <UsersButton />
            </main>
        )
    }
}