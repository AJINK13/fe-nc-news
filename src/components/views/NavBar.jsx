import React from "react"

const NavBar = () => {
  return (
    <div className="topnav">
      <a href="/">
        <i class="fas fa-home"></i> Homepage
      </a>
      <a href="/articles">
        <i class="fas fa-newspaper"></i> Articles
      </a>
      <a href="/topics">
        <i class="fas fa-book"></i> Topics
      </a>
      <a href="/users">
        <i class="fas fa-users"></i> Users
      </a>
    </div>
  )
}

export default NavBar
