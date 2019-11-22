import React from "react"

const ErrorPage = ({ error }) => {
  console.log(error, "error in error page")
  return (
    <>
      <p>{error.status}</p>
      <p>{error.message}</p>
    </>
  )
}

export default ErrorPage
