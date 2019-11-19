import React from "react"

const TopicCard = props => {
  const { slug } = props.topic

  return (
    <main>
      <h2>{slug}</h2>
    </main>
  )
}

export default TopicCard
