import React from "react"

const ArticleCard = props => {
  const {
    article_id,
    title,
    author,
    topic,
    created_at,
    votes,
    comment_count
  } = props.article

  console.log(props)
  return(
    <main>
      <h2>{title}</h2>
    </main>
  )
}

export default ArticleCard
