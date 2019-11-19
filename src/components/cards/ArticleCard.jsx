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
  return console.log(article_id, title, author, topic, votes)
}

export default ArticleCard
