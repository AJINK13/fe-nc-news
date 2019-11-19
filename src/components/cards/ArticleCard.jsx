import React from "react"

const ArticleCard = props => {
  const {
    title,
    author,
    topic,
    created_at,
    votes
  } = props.article

  console.log(props.article)
  return(
    <main>
      <h2>{title}</h2>
      <h3>{topic}</h3>
      <h3>{author}</h3>
      <h5>{votes}</h5>
      <h5>{created_at}</h5>
    </main>
  )
}

export default ArticleCard
