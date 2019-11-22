import React from "react"

const ErrorPage = ({ error }) => {
  return (
    <>
      <p>{error.status}</p>
      <p>{error.message}</p>
    </>
  )
}

export default ErrorPage
