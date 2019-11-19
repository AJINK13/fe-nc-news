import React from "react"

const TopicCard = props => {
  const { slug } = props.topic

  return (
    <main>
      <h3>{slug}</h3>
    </main>
  )
}

export default TopicCard
