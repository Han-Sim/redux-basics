import { FETCH_POST, NEW_POST } from "./types"

//action creator function; returns a function with an argument 'dispatch'
export const fetchPosts = () => {
  return function(dispatch) {
    console.log("fetching...")
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(posts =>
        dispatch({
          type: FETCH_POST,
          payload: posts
        })
      )
  }
}

export const createPost = postData => {
  console.log("cratePost action called")
  console.log(JSON.stringify(postData))
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(post =>{
        console.log(post)
        dispatch({
          type: NEW_POST,
          payload: post
        })
      })
  }
}
