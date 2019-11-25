import React from "react"
import ErrorIcon from "@material-ui/icons/Error"

const ErrorPage = ({ error }) => {
  return (
    <>
      <p>{error.status}</p>
      <ErrorIcon />
      <p>{error.message}</p>
    </>
  )
}

export default ErrorPage
