import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { createPost } from "../store/actions/postAction"

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "write title...",
      body: "write contents...",
    }
  }

  inputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    const post = {
      title: this.state.title,
      body: this.state.body,
    }

    console.log(post)
    this.props.createPost(post)
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.inputHandler}
            />
          </div>
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.inputHandler}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  post: state.postReducer.item
})

export default connect(
  mapStateToProps,
  { createPost }
)(PostForm)
