import React from "react"
import "./AppTemplate.css"

const AppTemplate = ({ post, postForm, counter }) => {
  return (
    <div className="app-template">
      <div className="post">
        {postForm}
        <br />
        {post}
      </div>
      <div className="counter">{counter}</div>
    </div>
  )
}

export default AppTemplate
