import React from "react"

const NavBar = () => {
  return (
    <header>
        <div className="topnav">
        <a href="/" className="logo">News Concept</a>
          <a href="/">
            <i class="fas fa-home"></i> Homepage
          </a>
          <a href="/articles">
            <i class="fas fa-newspaper"></i> Articles
          </a>
          <a href="/topics">
            <i class="fas fa-book"></i> Topics
          </a>
        </div>
    </header>
  )
}

export default NavBar
