import React from "react"

const NavBar = () => {
  return (
    <div className="topnav">
      <a className="active" href="/">
        Homepage
      </a>
      <a href="/articles">Articles</a>
      <a href="/topics">Topics</a>
      <a href="/users">Users</a>
    </div>
  )
}

export default NavBar
