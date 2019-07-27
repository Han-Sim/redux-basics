import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { fetchPosts } from "../store/actions/postAction"

class Post extends Component {
  componentDidMount() {
    this.props.fetchPosts() //fire action by calling an action creator
  }

  render() {
    const postItems = this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )
    })

    return (
      <div>
        <h1>Post!</h1>
        {postItems}
      </div>
    )
  }
}

Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.postReducer.items
})

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Post)
